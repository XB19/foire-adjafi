import { useCallback, useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "../../lib/supabaseClient";

export function useSupabaseTable(table, { orderBy = "created_at", ascending = false } = {}) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    const { data, error: queryError } = await supabase
      .from(table)
      .select("*")
      .order(orderBy, { ascending });

    if (queryError) {
      setError(queryError.message);
    } else {
      setRows(data ?? []);
    }
    setLoading(false);
  }, [table, orderBy, ascending]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { rows, loading, error, refresh, setRows };
}
