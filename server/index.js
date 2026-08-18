import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import messagesRoutes from "./routes/messages.js";
import { createCrudRouter } from "./routes/crud.js";

const app = express();

// Accept a comma-separated CORS_ORIGIN list, and always allow both
// localhost and 127.0.0.1 on the dev port — browsers treat them as
// different origins even though they're the same machine, which is a
// common source of "NetworkError when attempting to fetch resource".
const defaultOrigins = ["http://localhost:5183", "http://127.0.0.1:5183"];
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((o) => o.trim())
  : defaultOrigins;

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Origine non autorisée par CORS : ${origin}`));
      }
    },
  })
);
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use("/api/auth", authRoutes);
app.use("/api/contact_messages", messagesRoutes);

app.use(
  "/api/journal_posts",
  createCrudRouter("journal_posts", {
    orderBy: "created_at",
    columns: ["title", "slug", "category", "date", "image", "excerpt", "content", "updated_at"],
  })
);

app.use(
  "/api/exposants",
  createCrudRouter("exposants", {
    orderBy: "sort_order",
    ascending: true,
    columns: ["name", "slug", "description", "image", "phone", "email", "sort_order", "updated_at"],
  })
);

app.use(
  "/api/partners",
  createCrudRouter("partners", {
    orderBy: "sort_order",
    ascending: true,
    columns: ["name", "logo_url", "sort_order"],
  })
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Erreur serveur" });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API Foire Adjafi en écoute sur http://localhost:${port}`);
});
