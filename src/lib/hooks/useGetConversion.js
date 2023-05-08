import { useQuery } from "@tanstack/react-query";
import getConversion from "../../services/getConversion";

const useGetConversion = () =>
  useQuery({
    queryKey: ["amount"],
    queryFn: getConversion,
  });

export default useGetConversion;
