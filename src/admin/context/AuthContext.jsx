import { createContext, useContext, useEffect, useState } from "react";
import { api, isApiConfigured, getAuthToken, setAuthToken } from "../../lib/apiClient";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isApiConfigured || !getAuthToken()) {
      setLoading(false);
      return;
    }

    api
      .get("/auth/me")
      .then((data) => setUser(data.user))
      .catch(() => setAuthToken(null))
      .finally(() => setLoading(false));
  }, []);

  const signIn = async (email, password) => {
    try {
      const data = await api.post("/auth/login", { email, password });
      setAuthToken(data.token);
      setUser(data.user);
      return { error: null };
    } catch (err) {
      return { error: { message: err.message } };
    }
  };

  const signOut = async () => {
    setAuthToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
