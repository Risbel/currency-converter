import httpService from "../config/axios.config";

const getConversion = async ({ amount, from, to }) => {
  const response = await httpService.get(`/convert?to=${to}&from=${from}&amount=${amount}`);
  console.log(response.data);
  return response.data;
};

export default getConversion;
