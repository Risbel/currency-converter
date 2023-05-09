import { useQuery } from "@tanstack/react-query";
import getConversion from "../../services/getConversion";

const useGetConversion = (params, options) =>
  useQuery(
    {
      queryKey: ["amount", params],
      queryFn: () => getConversion(params),
    },
    options
  );

export default useGetConversion;
