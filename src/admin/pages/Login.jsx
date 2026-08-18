import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { isApiConfigured } from "../../lib/apiClient";

export default function Login() {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  if (isApiConfigured && user) {
    return <Navigate to={location.state?.from?.pathname ?? "/admin"} replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const { error: authError } = await signIn(email, password);
    if (authError) {
      setStatus("error");
      setError(authError.message);
      return;
    }

    setStatus("idle");
    navigate(location.state?.from?.pathname ?? "/admin", { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-adjafi-ink px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-2 text-center">
          <img src="/images/logo.png" alt="Foire Adjafi" className="h-14 w-auto object-contain" />
          <p className="font-mont-black text-xs uppercase tracking-widest text-white/60">
            Espace administrateur
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-2xl">
          <h1 className="heading-display text-xl text-adjafi-ink">Connexion</h1>

          {!isApiConfigured && (
            <p className="mt-4 rounded-lg bg-adjafi-yellow/20 px-4 py-3 font-open-sans text-sm text-adjafi-yellow-dark">
              L'API n'est pas encore configurée (voir <code>.env.example</code>). La connexion ne
              fonctionnera qu'une fois <code>VITE_API_URL</code> renseigné et le serveur{" "}
              <code>server/</code> démarré.
            </p>
          )}

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
                placeholder="admin@lafoireadjafi.com"
              />
            </div>
            <div>
              <label className="mb-1 block font-open-sans text-xs uppercase tracking-wide text-adjafi-gray">
                Mot de passe
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-adjafi-gray-light px-4 py-3 font-open-sans text-sm outline-none focus:border-adjafi-green"
                placeholder="••••••••"
              />
            </div>
          </div>

          {status === "error" && (
            <p className="mt-4 font-open-sans text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading" || !isApiConfigured}
            className="mt-6 w-full rounded-full bg-adjafi-green px-8 py-3 font-mont-black text-sm tracking-wide text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? "Connexion…" : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
