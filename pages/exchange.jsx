import React from "react";
import LayoutPage from "../layouts/layoutPage";
import useGetSymbols from "../lib/hooks/useGetSymbols";
import Select from "../components/select";

const exchange = () => {
  const { isLoading, data, isError, error } = useGetSymbols();

  return (
    <LayoutPage>
      <div className="text-center">
        <h1>Exchange Rate Calculator</h1>
      </div>
      <div className="flex flex-col items-center mt-10">
        <h2>From</h2>
        <Select>
          {data &&
            Object.keys(data.symbols).map((symbol) => (
              <option key={symbol} value={symbol}>
                {`${symbol}: ${data.symbols[symbol]}`}
              </option>
            ))}
        </Select>
        <h2>To</h2>
        <Select>
          {data &&
            Object.keys(data.symbols).map((symbol) => (
              <option key={symbol} value={symbol}>
                {`${symbol}: ${data.symbols[symbol]}`}
              </option>
            ))}
        </Select>
      </div>
    </LayoutPage>
  );
};

export default exchange;
