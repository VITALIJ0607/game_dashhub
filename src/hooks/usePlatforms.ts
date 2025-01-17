import { useQuery } from "@tanstack/react-query";
import platformService from "../services/platformService";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 60 * 1000,
  });
export default usePlatforms;
