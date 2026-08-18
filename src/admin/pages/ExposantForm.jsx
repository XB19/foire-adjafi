import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { slugify } from "../utils/slugify";

const emptyForm = {
  name: "",
  slug: "",
  description: "",
  image: "",
  phone: "",
  email: "",
  sort_order: 0,
};

export default function ExposantForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id;

  const [form, setForm] = useState(emptyForm);
  const [slugTouched, setSlugTouched] = useState(false);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isNew) return;
    (async () => {
      const { data, error: fetchError } = await supabase
        .from("exposants")
        .select("*")
        .eq("id", id)
        .single();
      if (fetchError) {
        setError(fetchError.message);
      } else if (data) {
        setForm({ ...emptyForm, ...data });
        setSlugTouched(true);
      }
      setLoading(false);
    })();
  }, [id, isNew]);

  const handleNameChange = (value) => {
    setForm((prev) => ({
      ...prev,
      name: value,
      slug: slugTouched ? prev.slug : slugify(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      slug: form.slug || slugify(form.name),
      sort_order: Number(form.sort_order) || 0,
      updated_at: new Date().toISOString(),
    };

    const query = isNew
      ? supabase.from("exposants").insert([payload])
      : supabase.from("exposants").update(payload).eq("id", id);

    const { error: saveError } = await query;
    setSaving(false);

    if (saveError) {
      setError(saveError.message);
      return;
    }

    navigate("/admin/exposants");
  };

  if (loading) {
    return <p className="font-open-sans text-sm text-adjafi-gray">Chargement…</p>;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="heading-display text-2xl text-adjafi-ink">
        {isNew ? "Nouvel exposant" : "Modifier l'exposant"}
      </h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-adjafi-gray-light">
        <div>
          <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
            Nom
          </label>
          <input
            required
            value={form.name}
            onChange={(e) => handleNameChange(e.target.value)}
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

        <div>
          <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
            Image (URL)
          </label>
          <input
            value={form.image}
            onChange={(e) => setForm((prev) => ({ ...prev, image: e.target.value }))}
            placeholder="https://..."
            className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
          />
          {form.image && (
            <img src={form.image} alt="Aperçu" className="mt-3 h-32 w-full rounded-lg object-cover" />
          )}
        </div>

        <div>
          <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
            Description
          </label>
          <textarea
            value={form.description}
            onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
            rows={4}
            className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
              Téléphone
            </label>
            <input
              value={form.phone}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
              className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
            />
          </div>
          <div>
            <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
            Ordre d'affichage
          </label>
          <input
            type="number"
            value={form.sort_order}
            onChange={(e) => setForm((prev) => ({ ...prev, sort_order: e.target.value }))}
            className="w-32 rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
          />
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
            onClick={() => navigate("/admin/exposants")}
            className="font-mont-black text-sm tracking-wide text-adjafi-gray hover:text-adjafi-ink"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
