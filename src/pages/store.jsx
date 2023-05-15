import React, { useState } from "react";
import Button from "../components/button";
import LayoutPage from "../layouts/layoutPage";
import Select from "../components/select";
import Spinner from "../components/spinner";
import Input from "../components/input";

const SectionContainer = ({ children }) => {
  return <div className="flex flex-wrap items-center gap-8 py-8 ">{children}</div>;
};

const Store = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LayoutPage>
      <h1>My buttons</h1>
      <SectionContainer>
        <Button>Push me</Button>
        <Button variant="secondary">Push me</Button>
        <Button disabled>Push me</Button>
        <Button size="sm">Push me</Button>
        <Button size="lg">Push me</Button>
        <Button isLoading={isLoading} onClick={() => setIsLoading((prev) => !prev)}>
          {isLoading ? "Loading..." : "Dynamic Button. Click Me!!!"}
        </Button>
      </SectionContainer>

      <h1>My selectors</h1>
      <SectionContainer>
        <Select size="sm">
          <option value="select me">select me 1</option>
          <option value="select me">select me 2</option>
        </Select>
        <Select variant="secondary">
          <option value="select me">select me 1</option>
          <option value="select me">select me 2</option>
        </Select>
        <Select size="lg" variant="animated">
          <option value="select me">select me 1</option>
          <option value="select me">select me 2</option>
        </Select>
        <Select size="xl">
          <option value="select me">select me 1</option>
          <option value="select me">select me 2</option>
        </Select>
      </SectionContainer>

      <h1>My inputs</h1>
      <SectionContainer>
        <Input size="sm" />
        <Input variant="secondary" />
        <Input size="lg" />
        <Input size="xl" />
      </SectionContainer>

      <h1>My spinners</h1>
      <SectionContainer>
        <Spinner />
        <Spinner size="2xl" />
        <Spinner size="xs" />
        <Spinner size="md" />
        <Spinner size="xl" />
      </SectionContainer>
    </LayoutPage>
  );
};

export default Store;
