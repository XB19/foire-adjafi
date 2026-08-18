import { useEffect, useState } from "react";
import { api, isApiConfigured } from "../lib/apiClient";

/**
 * Fetches rows managed from the admin dashboard and prepends them to the
 * site's built-in seed content, so pages keep working exactly as before
 * when the API isn't configured (or has no rows yet), and automatically
 * pick up anything an administrator adds later.
 */
export function usePublicList(resource, fallback) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (!isApiConfigured) return;
    let active = true;

    api
      .get(`/${resource}`)
      .then((data) => {
        if (active && data) setRows(data);
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, [resource]);

  return [...rows, ...fallback];
}
