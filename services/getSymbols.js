import httpService from "../config/axios.config";

const getSymbols = async () => {
  const resp = await httpService.get("/symbols");
  console.log(resp);
  return resp;
};

export default getSymbols;
