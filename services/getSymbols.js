import httpService from "../config/axios.config";

const getSymbols = async () => {
  const resp = await httpService.get("/symbols");
  console.log(resp.data);
  return resp.data;
};

export default getSymbols;
