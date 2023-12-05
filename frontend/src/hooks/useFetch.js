import { useEffect, useState, useCallback } from "react";

export const useFetch = (callback) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (params) => {
      try {
        setLoading(true);
        const response = await callback(params);

        setData(response.data.payload);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [callback]
  );

  useEffect(() => {
    let isMounted = true;

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fetchData]);

  return { data, error, loading };
};
