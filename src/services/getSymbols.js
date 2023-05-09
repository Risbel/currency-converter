import httpService from "../config/axios.config";

const getSymbols = async () => {
  const response = await httpService.get("/symbols");
  console.log(response.data);
  return response.data;
};

export default getSymbols;
