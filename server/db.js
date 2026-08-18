import pg from "pg";
import "dotenv/config";

const pool = new pg.Pool({
  host: process.env.PGHOST || "localhost",
  port: Number(process.env.PGPORT) || 5432,
  user: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE || "fadf",
});

pool.on("error", (err) => {
  console.error("Erreur inattendue du pool PostgreSQL:", err);
});

export default pool;
