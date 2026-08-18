import { Link } from "react-router-dom";
import { FaPlus, FaPen, FaTrash } from "react-icons/fa6";
import { api } from "../../lib/apiClient";
import { useApiTable } from "../hooks/useApiTable";
import ApiNotice from "../components/ApiNotice";

export default function Articles() {
  const { rows, loading, error, setRows } = useApiTable("journal_posts");

  const remove = async (row) => {
    if (!window.confirm(`Supprimer l'article « ${row.title} » ?`)) return;
    try {
      await api.del(`/journal_posts/${row.id}`);
      setRows((prev) => prev.filter((r) => r.id !== row.id));
    } catch {
      // leave the row in place on failure
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="heading-display text-2xl text-adjafi-ink">Journal</h1>
          <p className="mt-2 font-open-sans text-sm text-adjafi-gray">
            Articles affichés sur la page « Média &amp; Presse » du site.
          </p>
        </div>
        <Link
          to="/admin/articles/nouveau"
          className="flex items-center gap-2 rounded-full bg-adjafi-green px-6 py-3 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-105"
        >
          <FaPlus className="text-xs" /> Nouvel article
        </Link>
      </div>

      <div className="mt-8">
        <ApiNotice />
      </div>

      {error && <p className="mb-4 font-open-sans text-sm text-red-600">{error}</p>}

      {loading ? (
        <p className="font-open-sans text-sm text-adjafi-gray">Chargement…</p>
      ) : rows.length === 0 ? (
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-adjafi-gray-light">
          <p className="font-open-sans text-sm text-adjafi-gray">Aucun article pour l'instant.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-adjafi-gray-light">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-adjafi-gray-light font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
                <th className="px-5 py-3">Image</th>
                <th className="px-5 py-3">Titre</th>
                <th className="px-5 py-3">Catégorie</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-adjafi-gray-light last:border-0">
                  <td className="px-5 py-3">
                    {row.image ? (
                      <img src={row.image} alt="" className="h-12 w-16 rounded-lg object-cover" />
                    ) : (
                      <div className="h-12 w-16 rounded-lg bg-adjafi-gray-light" />
                    )}
                  </td>
                  <td className="px-5 py-3 font-open-sans text-sm text-adjafi-ink">{row.title}</td>
                  <td className="px-5 py-3">
                    <span className="rounded-full bg-adjafi-green/10 px-3 py-1 font-mont-black text-[10px] tracking-wide text-adjafi-green">
                      {row.category}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-open-sans text-sm text-adjafi-gray">{row.date}</td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={`/admin/articles/${row.id}`}
                        aria-label="Modifier"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-adjafi-gray-light/60 text-adjafi-ink transition-colors hover:bg-adjafi-green hover:text-white"
                      >
                        <FaPen className="text-xs" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => remove(row)}
                        aria-label="Supprimer"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-adjafi-gray-light/60 text-adjafi-ink transition-colors hover:bg-red-600 hover:text-white"
                      >
                        <FaTrash className="text-xs" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
