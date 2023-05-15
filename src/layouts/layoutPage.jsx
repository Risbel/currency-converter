import Navbar from "../components/navbar";

const LayoutPage = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mx-2 md:px-8 lg:px-12 py-12">{children}</main>
    </>
  );
};

export default LayoutPage;
