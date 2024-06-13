import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (gameID: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameID}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameID],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
