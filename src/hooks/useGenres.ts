import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genreService";
import ms from "ms";

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("24"),
  });
};
export default useGenres;
