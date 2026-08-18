import { useState } from "react";
import { FaTrash, FaEnvelopeOpen, FaEnvelope } from "react-icons/fa6";
import { supabase } from "../../lib/supabaseClient";
import { useSupabaseTable } from "../hooks/useSupabaseTable";
import SupabaseNotice from "../components/SupabaseNotice";

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function Messages() {
  const { rows, loading, error, refresh, setRows } = useSupabaseTable("contact_messages");
  const [busyId, setBusyId] = useState(null);

  const toggleRead = async (row) => {
    setBusyId(row.id);
    const { error: updateError } = await supabase
      .from("contact_messages")
      .update({ read: !row.read })
      .eq("id", row.id);
    if (!updateError) {
      setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, read: !row.read } : r)));
    }
    setBusyId(null);
  };

  const remove = async (row) => {
    if (!window.confirm("Supprimer définitivement ce message ?")) return;
    setBusyId(row.id);
    const { error: deleteError } = await supabase.from("contact_messages").delete().eq("id", row.id);
    if (!deleteError) {
      setRows((prev) => prev.filter((r) => r.id !== row.id));
    }
    setBusyId(null);
  };

  return (
    <div>
      <h1 className="heading-display text-2xl text-adjafi-ink">Messages</h1>
      <p className="mt-2 font-open-sans text-sm text-adjafi-gray">
        Messages envoyés depuis le formulaire de contact du site.
      </p>

      <div className="mt-8">
        <SupabaseNotice />
      </div>

      {error && <p className="mb-4 font-open-sans text-sm text-red-600">{error}</p>}

      {loading ? (
        <p className="font-open-sans text-sm text-adjafi-gray">Chargement…</p>
      ) : rows.length === 0 ? (
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-adjafi-gray-light">
          <p className="font-open-sans text-sm text-adjafi-gray">Aucun message reçu pour l'instant.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {rows.map((row) => (
            <div
              key={row.id}
              className={`rounded-2xl bg-white p-5 shadow-sm ring-1 transition-colors ${
                row.read ? "ring-adjafi-gray-light" : "ring-adjafi-green"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    {!row.read && <span className="h-2 w-2 rounded-full bg-adjafi-green" />}
                    <p className="font-mont-black text-sm text-adjafi-ink">
                      {row.name || "Anonyme"}
                    </p>
                  </div>
                  <p className="mt-1 font-open-sans text-xs text-adjafi-gray">
                    {row.phone} · {formatDate(row.created_at)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    disabled={busyId === row.id}
                    onClick={() => toggleRead(row)}
                    aria-label={row.read ? "Marquer non lu" : "Marquer lu"}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-adjafi-gray-light/60 text-adjafi-ink transition-colors hover:bg-adjafi-green hover:text-white disabled:opacity-50"
                  >
                    {row.read ? <FaEnvelope className="text-sm" /> : <FaEnvelopeOpen className="text-sm" />}
                  </button>
                  <button
                    type="button"
                    disabled={busyId === row.id}
                    onClick={() => remove(row)}
                    aria-label="Supprimer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-adjafi-gray-light/60 text-adjafi-ink transition-colors hover:bg-red-600 hover:text-white disabled:opacity-50"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                </div>
              </div>
              {row.message && (
                <p className="mt-3 whitespace-pre-wrap font-open-sans text-sm text-adjafi-ink/80">
                  {row.message}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
