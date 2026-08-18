import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { supabase } from "../../lib/supabaseClient";
import { useSupabaseTable } from "../hooks/useSupabaseTable";
import SupabaseNotice from "../components/SupabaseNotice";

const emptyForm = { name: "", logo_url: "", sort_order: 0 };

export default function Partners() {
  const { rows, loading, error, setRows } = useSupabaseTable("partners", {
    orderBy: "sort_order",
    ascending: true,
  });
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const addPartner = async (e) => {
    e.preventDefault();
    setSaving(true);
    setFormError("");

    const payload = { ...form, sort_order: Number(form.sort_order) || 0 };
    const { data, error: insertError } = await supabase
      .from("partners")
      .insert([payload])
      .select()
      .single();

    setSaving(false);

    if (insertError) {
      setFormError(insertError.message);
      return;
    }

    setRows((prev) => [...prev, data].sort((a, b) => a.sort_order - b.sort_order));
    setForm(emptyForm);
  };

  const remove = async (row) => {
    if (!window.confirm(`Retirer « ${row.name} » des partenaires ?`)) return;
    const { error: deleteError } = await supabase.from("partners").delete().eq("id", row.id);
    if (!deleteError) {
      setRows((prev) => prev.filter((r) => r.id !== row.id));
    }
  };

  return (
    <div>
      <h1 className="heading-display text-2xl text-adjafi-ink">Partenaires</h1>
      <p className="mt-2 font-open-sans text-sm text-adjafi-gray">
        Logos affichés sur la page « Sponsorisez » du site.
      </p>

      <div className="mt-8">
        <SupabaseNotice />
      </div>

      <form
        onSubmit={addPartner}
        className="mb-8 grid grid-cols-1 gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-adjafi-gray-light sm:grid-cols-[1fr_1fr_100px_auto]"
      >
        <div>
          <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
            Nom
          </label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full rounded-lg border border-adjafi-gray-light px-3 py-2 font-open-sans text-sm outline-none focus:border-adjafi-green"
          />
        </div>
        <div>
          <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
            Logo (URL)
          </label>
          <input
            required
            value={form.logo_url}
            onChange={(e) => setForm((prev) => ({ ...prev, logo_url: e.target.value }))}
            placeholder="/images/partners/... ou https://..."
            className="w-full rounded-lg border border-adjafi-gray-light px-3 py-2 font-open-sans text-sm outline-none focus:border-adjafi-green"
          />
        </div>
        <div>
          <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
            Ordre
          </label>
          <input
            type="number"
            value={form.sort_order}
            onChange={(e) => setForm((prev) => ({ ...prev, sort_order: e.target.value }))}
            className="w-full rounded-lg border border-adjafi-gray-light px-3 py-2 font-open-sans text-sm outline-none focus:border-adjafi-green"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            disabled={saving}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-adjafi-green px-5 py-2 font-mont-black text-xs tracking-wide text-white transition-transform hover:scale-105 disabled:opacity-50"
          >
            <FaPlus className="text-[10px]" /> Ajouter
          </button>
        </div>
        {formError && (
          <p className="sm:col-span-4 font-open-sans text-sm text-red-600">{formError}</p>
        )}
      </form>

      {error && <p className="mb-4 font-open-sans text-sm text-red-600">{error}</p>}

      {loading ? (
        <p className="font-open-sans text-sm text-adjafi-gray">Chargement…</p>
      ) : rows.length === 0 ? (
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-adjafi-gray-light">
          <p className="font-open-sans text-sm text-adjafi-gray">Aucun partenaire pour l'instant.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {rows.map((row) => (
            <div
              key={row.id}
              className="group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-adjafi-gray-light"
            >
              <img src={row.logo_url} alt={row.name} className="h-full max-h-16 w-full object-contain" />
              <p className="line-clamp-1 text-center font-open-sans text-[11px] text-adjafi-gray">
                {row.name}
              </p>
              <button
                type="button"
                onClick={() => remove(row)}
                aria-label="Supprimer"
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-adjafi-gray opacity-0 shadow ring-1 ring-adjafi-gray-light transition-opacity hover:text-red-600 group-hover:opacity-100"
              >
                <FaTrash className="text-[10px]" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
