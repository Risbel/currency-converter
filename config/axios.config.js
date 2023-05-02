import axios from "axios";

const httpService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_EXCHANGE_RATES_DATA,
  headers: {
    "Content-Type": "application/json",
    apikey: process.env.NEXT_PUBLIC_API_KEY_EXCHANGE_RATES_DATA,
  },
});

export default httpService;
