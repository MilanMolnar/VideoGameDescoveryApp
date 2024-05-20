import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const contorller = new AbortController();
    setLoading(true);
    apiClient //setting the load state to false should be handled in the finally func, but its not worikng in dev with strict mode
      .get<FetchGenresResponse>("/genres", { signal: contorller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => contorller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
