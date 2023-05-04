import LayoutPages from "../layouts/layoutPages";

const Home = () => {
  return (
    <LayoutPages>
      <section>
        <div className="flex flex-col items-center gap-8 mt-8">
          <h1>My exchange rate calculator</h1>
          <p>This is an exchange rate calculator for the company Fonoma.</p>
        </div>
      </section>
    </LayoutPages>
  );
};

export default Home;
