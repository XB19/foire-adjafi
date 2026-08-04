import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.warn(
    "Supabase n'est pas configuré : ajoutez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans un fichier .env"
  );
}

// Falls back to a placeholder URL so createClient never throws at import time
// when Supabase hasn't been configured yet — calls simply fail at runtime instead.
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);
