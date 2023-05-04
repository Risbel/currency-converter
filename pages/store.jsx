import React, { useState } from "react";
import Button from "../components/button";
import LayoutPages from "../layouts/layoutPages";

const SectionContainer = ({ children }) => {
  return (
    <div className="flex flex-wrap items-center gap-8 py-8 ">{children}</div>
  );
};

const Store = () => {
  const [loading, setLoading] = useState(false);

  return (
    <LayoutPages>
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
    </LayoutPages>
  );
};

export default Store;
