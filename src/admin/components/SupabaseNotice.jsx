import { isSupabaseConfigured } from "../../lib/supabaseClient";

export default function SupabaseNotice() {
  if (isSupabaseConfigured) return null;

  return (
    <div className="mb-6 rounded-xl border border-adjafi-yellow-dark/30 bg-adjafi-yellow/15 px-5 py-4">
      <p className="font-mont-black text-sm text-adjafi-yellow-dark">Supabase n'est pas configuré</p>
      <p className="mt-1 font-open-sans text-sm text-adjafi-ink/80">
        Renseignez <code>VITE_SUPABASE_URL</code> et <code>VITE_SUPABASE_ANON_KEY</code> dans{" "}
        <code>.env</code>, puis exécutez <code>supabase/schema.sql</code> dans votre projet Supabase
        pour activer cette page.
      </p>
    </div>
  );
}
