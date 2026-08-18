import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

/**
 * Fetches rows managed from the admin dashboard and prepends them to the
 * site's built-in seed content, so pages keep working exactly as before
 * when Supabase isn't configured (or has no rows yet), and automatically
 * pick up anything an administrator adds later.
 */
export function usePublicList(table, fallback, { orderBy = "created_at", ascending = false } = {}) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    let active = true;

    supabase
      .from(table)
      .select("*")
      .order(orderBy, { ascending })
      .then(({ data, error }) => {
        if (active && !error && data) setRows(data);
      });

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table]);

  return [...rows, ...fallback];
}
