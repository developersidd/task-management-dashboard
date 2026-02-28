import { useEffect, useState } from "react";
import api from "../api";

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await api.get(url);
        if (response.status < 200 || response.status >= 400) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setData(response.data);
        setError(null);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Reruns when the URL changes

  return { data, loading, error };
};

export default useFetch;
