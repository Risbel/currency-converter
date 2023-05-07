import React from "react";
import LayoutPage from "../layouts/layoutPage";
import Select from "../components/select";
import Input from "../components/input";
import Button from "../components/button";
import Spinner from "../components/spinner";

import useGetSymbols from "../lib/hooks/useGetSymbols";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  amount: z.string().nonempty("Required"),
  from: z.string().nonempty("Required"),
  to: z.string().nonempty("Required"),
});

const exchange = () => {
  const { isLoading, data, isError, error } = useGetSymbols();

  const { handleSubmit, control } = useForm({ resolver: zodResolver(schema) });

  const convert = (formData) => {
    console.log("This is the amount to convert:", formData);
  };

  {
    if (isLoading) {
      return (
        <LayoutPage>
          <div className="flex justify-center mt-16">
            <Spinner size="2xl" />
          </div>
        </LayoutPage>
      );
    } else if (isError) {
      return (
        <LayoutPage>
          <div className="text-red-700 text-xl text-center">{error.message}</div>
        </LayoutPage>
      );
    }
  }

  return (
    <LayoutPage>
      <div className="text-center">
        <h1>Exchange Rate Calculator</h1>
      </div>
      <form className="flex flex-col items-center mt-10" onSubmit={handleSubmit(convert)}>
        <label>Amount</label>
        <Controller
          name="amount"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input {...field} autoComplete="off" placeholder="Insert amount" ref={field.ref} />}
        />
        <label>From</label>
        <Controller
          name="from"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select {...field} ref={field.ref}>
              {Object.entries(data.symbols).map(([symbol, name]) => (
                <option className="text-xs md:text-lg" key={symbol} value={symbol}>
                  {`${symbol}: ${name}`}
                </option>
              ))}
            </Select>
          )}
        />
        <label>To</label>
        <Controller
          name="to"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select {...field} ref={field.ref}>
              {Object.entries(data.symbols).map(([symbol, name]) => (
                <option key={symbol} value={symbol}>
                  {`${symbol}: ${name}`}
                </option>
              ))}
            </Select>
          )}
        />
        <Button type="submit" className="mt-4">
          Convert
        </Button>
      </form>
    </LayoutPage>
  );
};

export default exchange;
