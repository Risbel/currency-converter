import httpService from "../config/axios.config";

const getConversion = async ({ amount, from, to }) => {
  const response = await httpService.get(`/convert?to=${to}&from=${from}&amount=${amount}`);
  return response.data;
};

export default getConversion;
