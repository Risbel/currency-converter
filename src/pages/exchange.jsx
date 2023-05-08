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
import useGetConversion from "../lib/hooks/useGetConversion";

const schema = z.object({
  amount: z.string().nonempty("Required"),
  from: z.string().nonempty("Required"),
  to: z.string().nonempty("Required"),
});

const exchange = () => {
  const {
    isLoading: isLoadingCurrency,
    data: dataCurrency,
    isError: isErrorCurrency,
    error: errorCurrency,
  } = useGetSymbols();

  const {
    isFetching: isFetchingAmount,
    data: dataAcount,
    isError: isErrorAcount,
    error: errorAcount,
  } = useGetConversion();

  const { handleSubmit, control } = useForm({ resolver: zodResolver(schema) });

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

  const currencySymbols = [];
  const nameSymbols = [];

  Object.entries(dataCurrency.symbols).forEach(([symbol, name]) => {
    currencySymbols.push(symbol);
    nameSymbols.push(name);
  });

  const onSubmit = (formData) => {
    getConversion(formData);
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
        <label>From</label>
        <Controller
          defaultValue={`${currencySymbols[36]}: ${nameSymbols[36]}`}
          name="from"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Select value={value} onChange={onChange}>
              {currencySymbols.map((symbol, index) => (
                <option key={symbol}>{`${symbol}: ${nameSymbols[index]}`}</option>
              ))}
            </Select>
          )}
        />
        <label>To</label>
        <Controller
          defaultValue={`${currencySymbols[150]}: ${nameSymbols[150]}`}
          name="to"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Select value={value} onChange={onChange}>
              {currencySymbols.map((symbol, index) => (
                <option key={symbol}>{`${symbol}: ${nameSymbols[index]}`}</option>
              ))}
            </Select>
          )}
        />
        <Button type="submit" className="mt-4">
          Convert
        </Button>
      </form>
      {/* {isFetchingAmount ? <Spinner size="xl" /> : <h2>{dataAcount.result}</h2>} */}
    </LayoutPage>
  );
};

export default exchange;
