import LayoutPage from "../layouts/layoutPage";

const Home = () => {
  return (
    <LayoutPage>
      <div className="flex flex-col items-center gap-10">
        <h1>My exchange rate calculator</h1>
        <p className="text-2xl">This is an exchange rate calculator made for the company Fonoma.</p>
      </div>
    </LayoutPage>
  );
};

export default Home;
