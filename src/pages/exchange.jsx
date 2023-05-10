import LayoutPage from "../layouts/layoutPage";
import Select from "../components/select";
import Input from "../components/input";
import Button from "../components/button";
import Spinner from "../components/spinner";

import useGetSymbols from "../lib/hooks/useGetSymbols";
import getConversion from "../services/getConversion";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";

const schema = z.object({
  amount: z.string().nonempty("Insert the amount please!"),
  from: z.string().nonempty("Required"),
  to: z.string().nonempty("Required"),
});

const Exchange = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataConversion, setDataConversion] = useState(null);
  const [errorConversion, setErrorConversion] = useState(null);

  const {
    isLoading: isLoadingCurrency,
    data: dataCurrency,
    isError: isErrorCurrency,
    error: errorCurrency,
  } = useGetSymbols();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  {
    if (isLoadingCurrency) {
      return (
        <LayoutPage>
          <div className="flex justify-center mt-16">
            <Spinner size="2xl" />
          </div>
        </LayoutPage>
      );
    } else if (isErrorCurrency) {
      return (
        <LayoutPage>
          <div className="text-red-700 text-xl text-center">{errorCurrency.message}</div>
        </LayoutPage>
      );
    }
  }

  const currencies = Object.entries(dataCurrency.symbols).map(([symbol, name]) => ({
    name,
    symbol,
  }));

  const onSubmit = async (formData) => {
    setIsLoading(true);

    try {
      const dataConversion = await getConversion(formData);
      setDataConversion(dataConversion);
    } catch (error) {
      setErrorConversion(error.message);
    } finally {
      setIsLoading(false); // Establecer isLoading a false
    }
  };

  return (
    <LayoutPage>
      <div className="text-center">
        <h1>Exchange Rate Calculator</h1>
      </div>
      <form className="flex flex-col items-center mt-10" onSubmit={handleSubmit(onSubmit)}>
        <label>Amount</label>
        <Controller
          defaultValue=""
          name="amount"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChange={onChange} type="number" placeholder="Insert amount" autoComplete="off" />
          )}
        />
        {errors.amount && <span className="text-red-700 text-md">{errors.amount.message}</span>}
        <label>From</label>
        <Controller
          defaultValue={currencies?.[36].symbol}
          name="from"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Select value={value} onChange={onChange}>
              {currencies.map(({ symbol, name }) => (
                <option key={symbol} value={symbol}>{`${symbol}: ${name}`}</option>
              ))}
            </Select>
          )}
        />
        <label>To</label>
        <Controller
          defaultValue={currencies?.[150].symbol}
          name="to"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Select value={value} onChange={onChange}>
              {currencies.map(({ symbol, name }) => (
                <option key={symbol} value={symbol}>{`${symbol}: ${name}`}</option>
              ))}
            </Select>
          )}
        />
        <Button type="submit" className="mt-4">
          Convert
        </Button>
      </form>

      {isLoading ? (
        <Spinner />
      ) : (
        dataConversion && (
          <div className="text-center text-3xl mt-8">{`${dataConversion?.result} ${dataConversion?.query?.to}`}</div>
        )
      )}
      {errorConversion && <div className="text-red-700 text-md">{errorConversion}</div>}
    </LayoutPage>
  );
};

export default Exchange;
