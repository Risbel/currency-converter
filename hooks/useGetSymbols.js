import { useQuery } from "@tanstack/react-query";
import getSymbols from "../services/getSymbols";

const useGetSymbols = () =>
  useQuery({
    queryKey: ["symbols"],
    queryFn: getSymbols,
    staleTime: 100000,
  });

export default useGetSymbols;
