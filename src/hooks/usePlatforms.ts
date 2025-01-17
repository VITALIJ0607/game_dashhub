import { useQuery } from "@tanstack/react-query";
import platformService from "../services/platformService";
import ms from "ms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms("1m"),
  });
export default usePlatforms;
