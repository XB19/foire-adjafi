import { Router } from "express";
import pool from "../db.js";
import { requireAuth } from "../middleware/auth.js";

function serialize(value) {
  return value !== null && typeof value === "object" ? JSON.stringify(value) : value;
}

/**
 * Builds a REST router (GET list, GET one, POST, PUT, DELETE) for a single
 * table. Reads are public; writes require a valid admin token. `columns`
 * whitelists which body fields are allowed into the query, since table and
 * column names can't be parameterized like values — this is what keeps
 * building the query from req.body safe.
 */
export function createCrudRouter(table, { orderBy = "created_at", ascending = false, columns }) {
  const router = Router();
  const direction = ascending ? "asc" : "desc";

  function pickAllowed(body = {}) {
    const entries = Object.entries(body).filter(([key]) => columns.includes(key));
    return {
      columns: entries.map(([key]) => key),
      values: entries.map(([, value]) => serialize(value)),
    };
  }

  router.get("/", async (req, res) => {
    const { rows } = await pool.query(`select * from ${table} order by ${orderBy} ${direction}`);
    res.json(rows);
  });

  router.get("/:id", async (req, res) => {
    const { rows } = await pool.query(`select * from ${table} where id = $1`, [req.params.id]);
    if (!rows[0]) return res.status(404).json({ error: "Introuvable" });
    res.json(rows[0]);
  });

  router.post("/", requireAuth, async (req, res) => {
    const { columns: cols, values } = pickAllowed(req.body);
    if (cols.length === 0) return res.status(400).json({ error: "Aucun champ valide" });

    const placeholders = cols.map((_, i) => `$${i + 1}`).join(", ");
    try {
      const { rows } = await pool.query(
        `insert into ${table} (${cols.join(", ")}) values (${placeholders}) returning *`,
        values
      );
      res.status(201).json(rows[0]);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  router.put("/:id", requireAuth, async (req, res) => {
    const { columns: cols, values } = pickAllowed(req.body);
    if (cols.length === 0) return res.status(400).json({ error: "Aucun champ valide" });

    const setClause = cols.map((col, i) => `${col} = $${i + 1}`).join(", ");
    try {
      const { rows } = await pool.query(
        `update ${table} set ${setClause} where id = $${cols.length + 1} returning *`,
        [...values, req.params.id]
      );
      if (!rows[0]) return res.status(404).json({ error: "Introuvable" });
      res.json(rows[0]);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  router.delete("/:id", requireAuth, async (req, res) => {
    await pool.query(`delete from ${table} where id = $1`, [req.params.id]);
    res.status(204).end();
  });

  return router;
}
