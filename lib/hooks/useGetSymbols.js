import { useQuery } from "@tanstack/react-query";
import getSymbols from "../services/getSymbols";
import * as queryKeys from "../queryKeys";

const useGetSymbols = () =>
  useQuery({
    queryKey: queryKeys.listSymbols,
    queryFn: getSymbols,
    staleTime: 100000,
  });

export default useGetSymbols;
