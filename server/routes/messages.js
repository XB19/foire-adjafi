import { Router } from "express";
import pool from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

// Public : envoi d'un message depuis le formulaire de contact du site.
router.post("/", async (req, res) => {
  const { name, phone, message } = req.body ?? {};
  if (!phone) {
    return res.status(400).json({ error: "Le numéro de téléphone est requis" });
  }

  const { rows } = await pool.query(
    "insert into contact_messages (name, phone, message) values ($1, $2, $3) returning *",
    [name ?? null, phone, message ?? null]
  );
  res.status(201).json(rows[0]);
});

// Admin : liste des messages.
router.get("/", requireAuth, async (req, res) => {
  const { rows } = await pool.query("select * from contact_messages order by created_at desc");
  res.json(rows);
});

// Admin : marquer lu / non lu.
router.patch("/:id", requireAuth, async (req, res) => {
  const { read } = req.body ?? {};
  const { rows } = await pool.query(
    "update contact_messages set read = $1 where id = $2 returning *",
    [Boolean(read), req.params.id]
  );
  if (!rows[0]) return res.status(404).json({ error: "Message introuvable" });
  res.json(rows[0]);
});

// Admin : suppression.
router.delete("/:id", requireAuth, async (req, res) => {
  await pool.query("delete from contact_messages where id = $1", [req.params.id]);
  res.status(204).end();
});

export default router;
