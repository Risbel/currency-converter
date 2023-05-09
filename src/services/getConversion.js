import httpService from "../config/axios.config";

const getConversion = async (params = { amount: 10, from: "USD", to: "CUP" }) => {
  const { amount, from, to } = params;
  const response = await httpService.get(`/convert?to=${to}&from=${from}&amount=${amount}`);
  console.log(response.data);
  return response.data;
};

export default getConversion;
