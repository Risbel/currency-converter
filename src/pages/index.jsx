import LayoutPage from "../layouts/layoutPage";

const Home = () => {
  return (
    <LayoutPage>
      <div className="flex flex-col items-center gap-8">
        <h1>My exchange rate calculator</h1>
        <p>This is an exchange rate calculator for the company Fonoma.</p>
      </div>
    </LayoutPage>
  );
};

export default Home;
