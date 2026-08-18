import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import messagesRoutes from "./routes/messages.js";
import { createCrudRouter } from "./routes/crud.js";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5183" }));
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
