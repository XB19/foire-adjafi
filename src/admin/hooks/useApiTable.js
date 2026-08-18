import { useCallback, useEffect, useState } from "react";
import { api, isApiConfigured } from "../../lib/apiClient";

export function useApiTable(resource) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    if (!isApiConfigured) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await api.get(`/${resource}`);
      setRows(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }, [resource]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { rows, loading, error, refresh, setRows };
}
