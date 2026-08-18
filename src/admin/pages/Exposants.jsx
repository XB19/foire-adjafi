import { Link } from "react-router-dom";
import { FaPlus, FaPen, FaTrash } from "react-icons/fa6";
import { supabase } from "../../lib/supabaseClient";
import { useSupabaseTable } from "../hooks/useSupabaseTable";
import SupabaseNotice from "../components/SupabaseNotice";

export default function Exposants() {
  const { rows, loading, error, setRows } = useSupabaseTable("exposants", {
    orderBy: "sort_order",
    ascending: true,
  });

  const remove = async (row) => {
    if (!window.confirm(`Supprimer l'exposant « ${row.name} » ?`)) return;
    const { error: deleteError } = await supabase.from("exposants").delete().eq("id", row.id);
    if (!deleteError) {
      setRows((prev) => prev.filter((r) => r.id !== row.id));
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="heading-display text-2xl text-adjafi-ink">Exposants</h1>
          <p className="mt-2 font-open-sans text-sm text-adjafi-gray">
            Affichés sur la page « Nos Exposants » du site.
          </p>
        </div>
        <Link
          to="/admin/exposants/nouveau"
          className="flex items-center gap-2 rounded-full bg-adjafi-green px-6 py-3 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-105"
        >
          <FaPlus className="text-xs" /> Nouvel exposant
        </Link>
      </div>

      <div className="mt-8">
        <SupabaseNotice />
      </div>

      {error && <p className="mb-4 font-open-sans text-sm text-red-600">{error}</p>}

      {loading ? (
        <p className="font-open-sans text-sm text-adjafi-gray">Chargement…</p>
      ) : rows.length === 0 ? (
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-adjafi-gray-light">
          <p className="font-open-sans text-sm text-adjafi-gray">Aucun exposant pour l'instant.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((row) => (
            <div key={row.id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-adjafi-gray-light">
              {row.image ? (
                <img src={row.image} alt={row.name} className="h-36 w-full object-cover" />
              ) : (
                <div className="h-36 w-full bg-adjafi-gray-light" />
              )}
              <div className="p-5">
                <p className="heading-display text-base text-adjafi-ink">{row.name}</p>
                <p className="mt-2 line-clamp-2 font-open-sans text-sm text-adjafi-gray">
                  {row.description}
                </p>
                <div className="mt-4 flex gap-2">
                  <Link
                    to={`/admin/exposants/${row.id}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-adjafi-gray-light/60 px-4 py-2 font-mont-black text-xs tracking-wide text-adjafi-ink hover:bg-adjafi-green hover:text-white"
                  >
                    <FaPen className="text-[10px]" /> Modifier
                  </Link>
                  <button
                    type="button"
                    onClick={() => remove(row)}
                    aria-label="Supprimer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-adjafi-gray-light/60 text-adjafi-ink hover:bg-red-600 hover:text-white"
                  >
                    <FaTrash className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
