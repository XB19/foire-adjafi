import { isApiConfigured } from "../../lib/apiClient";

export default function ApiNotice() {
  if (isApiConfigured) return null;

  return (
    <div className="mb-6 rounded-xl border border-adjafi-yellow-dark/30 bg-adjafi-yellow/15 px-5 py-4">
      <p className="font-mont-black text-sm text-adjafi-yellow-dark">L'API n'est pas configurée</p>
      <p className="mt-1 font-open-sans text-sm text-adjafi-ink/80">
        Renseignez <code>VITE_API_URL</code> dans <code>.env</code>, puis démarrez le serveur avec{" "}
        <code>npm run dev --prefix server</code> pour activer cette page.
      </p>
    </div>
  );
}
