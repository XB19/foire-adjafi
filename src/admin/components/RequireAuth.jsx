import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { isSupabaseConfigured } from "../../lib/supabaseClient";

export default function RequireAuth({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (!isSupabaseConfigured) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-adjafi-gray-light/40">
        <p className="font-open-sans text-sm text-adjafi-gray">Chargement…</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}
