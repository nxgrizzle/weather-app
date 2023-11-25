import weatherData from "./dummy.json";
const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 data-testid="header">Weather App</h1>
    </main>
  );
};
export default Home;

const Search = () => {
  return (
    <div>
      <input type="text" placeholder="Search" />
    </div>
  );
};

const WeatherCard = () => {
  return (
    <div>
      <h1>Weather Card</h1>
    </div>
  );
};

const WeatherDetails = () => {
  return (
    <div>
      <h1>Weather Details</h1>
    </div>
  );
};
