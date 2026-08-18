import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../lib/apiClient";
import { slugify } from "../utils/slugify";
import ContentBlocksEditor from "../components/ContentBlocksEditor";

const categories = ["ADJAFI", "Divers", "EXPOSANTS", "Opportunités", "Presse"];

const emptyForm = {
  title: "",
  slug: "",
  category: "ADJAFI",
  date: "",
  image: "",
  excerpt: "",
};

export default function ArticleForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id;

  const [form, setForm] = useState(emptyForm);
  const [blocks, setBlocks] = useState([{ type: "p", text: "" }]);
  const [slugTouched, setSlugTouched] = useState(false);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isNew) return;
    (async () => {
      try {
        const data = await api.get(`/journal_posts/${id}`);
        setForm({
          title: data.title ?? "",
          slug: data.slug ?? "",
          category: data.category ?? "ADJAFI",
          date: data.date ?? "",
          image: data.image ?? "",
          excerpt: data.excerpt ?? "",
        });
        setBlocks(data.content?.length ? data.content : [{ type: "p", text: "" }]);
        setSlugTouched(true);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    })();
  }, [id, isNew]);

  const handleTitleChange = (value) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: slugTouched ? prev.slug : slugify(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      slug: form.slug || slugify(form.title),
      content: blocks.filter((b) => (b.type === "ul" ? b.items.some((i) => i.trim()) : b.text?.trim())),
      updated_at: new Date().toISOString(),
    };

    try {
      if (isNew) {
        await api.post("/journal_posts", payload);
      } else {
        await api.put(`/journal_posts/${id}`, payload);
      }
      navigate("/admin/articles");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="font-open-sans text-sm text-adjafi-gray">Chargement…</p>;
  }

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="heading-display text-2xl text-adjafi-ink">
        {isNew ? "Nouvel article" : "Modifier l'article"}
      </h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-adjafi-gray-light">
        <div>
          <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
            Titre
          </label>
          <input
            required
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
          />
        </div>

        <div>
          <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
            Slug (URL) — /journal/{form.slug || "..."}
          </label>
          <input
            required
            value={form.slug}
            onChange={(e) => {
              setSlugTouched(true);
              setForm((prev) => ({ ...prev, slug: slugify(e.target.value) }));
            }}
            className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
              Catégorie
            </label>
            <select
              value={form.category}
              onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
              className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
              Date affichée
            </label>
            <input
              value={form.date}
              onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
              placeholder="14 novembre 2024"
              className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
            Image (URL)
          </label>
          <input
            value={form.image}
            onChange={(e) => setForm((prev) => ({ ...prev, image: e.target.value }))}
            placeholder="/images/site/... ou https://..."
            className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
          />
          {form.image && (
            <img src={form.image} alt="Aperçu" className="mt-3 h-32 w-full rounded-lg object-cover" />
          )}
        </div>

        <div>
          <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
            Extrait (affiché dans les cartes)
          </label>
          <textarea
            value={form.excerpt}
            onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
            rows={3}
            className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
          />
        </div>

        <div>
          <label className="mb-2 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
            Contenu de l'article
          </label>
          <ContentBlocksEditor blocks={blocks} onChange={setBlocks} />
        </div>

        {error && <p className="font-open-sans text-sm text-red-600">{error}</p>}

        <div className="flex items-center gap-3 border-t border-adjafi-gray-light pt-6">
          <button
            type="submit"
            disabled={saving}
            className="rounded-full bg-adjafi-green px-8 py-3 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-105 disabled:opacity-50"
          >
            {saving ? "Enregistrement…" : "Enregistrer"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/articles")}
            className="font-mont-black text-sm tracking-wide text-adjafi-gray hover:text-adjafi-ink"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
