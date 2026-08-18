import "dotenv/config";
import bcrypt from "bcryptjs";
import pool from "../db.js";

const [, , email, password] = process.argv;

if (!email || !password) {
  console.error('Usage: npm run create-admin --prefix server -- admin@example.com "mot-de-passe"');
  process.exit(1);
}

const hash = await bcrypt.hash(password, 10);

await pool.query(
  `insert into admin_users (email, password_hash)
   values ($1, $2)
   on conflict (email) do update set password_hash = excluded.password_hash`,
  [email, hash]
);

console.log(`Compte administrateur prêt : ${email}`);
await pool.end();
