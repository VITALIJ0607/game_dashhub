import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genreService";

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};
export default useGenres;
