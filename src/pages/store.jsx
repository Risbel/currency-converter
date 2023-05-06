import React, { useState } from "react";
import Button from "../components/button";
import LayoutPage from "../layouts/layoutPage";
import Select from "../components/select";
import Spinner from "../components/spinner";

const SectionContainer = ({ children }) => {
  return <div className="flex flex-wrap items-center gap-8 py-8 ">{children}</div>;
};

const Store = () => {
  const [loading, setLoading] = useState(false);

  return (
    <LayoutPage>
      <h1>My Buttons</h1>
      <SectionContainer>
        <Button>Push me</Button>
        <Button variant="secundary">Push me</Button>
        <Button disabled>Push me</Button>
        <Button size="sm">Push me</Button>
        <Button size="lg">Push me</Button>
        <Button isLoading={loading} onClick={() => setLoading((prev) => !prev)}>
          {loading ? "Loading..." : "Dynamic Button. Click Me!!!"}
        </Button>
      </SectionContainer>

      <h1>My Selects</h1>
      <SectionContainer>
        <Select>
          <option value="select me">select me 1</option>
          <option value="select me">select me 2</option>
        </Select>
        <Select variant="secundary">
          <option value="select me">select me 1</option>
          <option value="select me">select me 2</option>
        </Select>
        <Select variant="animated">
          <option value="select me">select me 1</option>
          <option value="select me">select me 2</option>
        </Select>
        <Select size="lg">
          <option value="select me">select me 1</option>
          <option value="select me">select me 2</option>
        </Select>
        <Select size="xl">
          <option value="select me">select me 1</option>
          <option value="select me">select me 2</option>
        </Select>
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
