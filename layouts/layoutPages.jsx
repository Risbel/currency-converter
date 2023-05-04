import React from "react";
import Navbar from "../components/navbar";

const LayoutPages = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="p-8">{children}</div>
    </>
  );
};

export default LayoutPages;
