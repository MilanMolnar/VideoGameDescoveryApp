import { useQuery } from "@tanstack/react-query";

import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";

const useTrailers = (gameID: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameID}/movies`);

  return useQuery({
    queryKey: ["trailers", gameID],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
