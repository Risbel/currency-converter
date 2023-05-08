import React from "react";
import httpService from "../config/axios.config";

const convertAmount = async (formData) => {
  const to = formData.to.substring(0, 3);
  const from = formData.from.substring(0, 3);
  const amount = formData.amount;

  const response = await httpService.get(`/convert?to=${to}&from=${from}&amount=${amount}`);
  console.log(response.data);
  return response.data;
};

export default convertAmount;
