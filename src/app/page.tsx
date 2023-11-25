"use client";
import { useState } from "react";
import { Day } from "./utils";
import { useWeatherFetch } from "./hooks/useWeatherFetch";
import { Search } from "./components/search/Search";
import { WeatherCard } from "./components/weather-card/WeatherCard";
import { WeatherDetailsLoading } from "./components/weather-card/WeatherDetails";
const Home = () => {
  const [location, setLocation] = useState<string | undefined>();
  const { weather, loading } = useWeatherFetch(location);
  const [current, setCurrent] = useState<number>(0);
  const [unit, setUnit] = useState<"C" | "F">("C");
  const handleSearch = (location: string) => {
    setLocation(location);
  };
  const handleCurrent = (index: number) => {
    setCurrent(index);
  };
  const handleUnit = (unit: "C" | "F") => {
    setUnit(unit);
  };
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-start gap-y-4 p-24">
      <h1 data-testid="header" className="text-5xl">
        Weather App
      </h1>

      {location ? (
        <h2>Results for {location}</h2>
      ) : (
        <p className="text-white">Search for a location below:</p>
      )}
      <Search handleSearch={handleSearch} />
      {location ? (
        <WeatherDetailsLoading
          weather={weather?.days[current] as Day}
          unit={unit}
          handleUnit={handleUnit}
          loading={loading}
        />
      ) : null}
      <div className="flex flex-row gap-x-4 w-full flex-wrap gap-y-4 justify-center items-center">
        {weather
          ? Array(7)
              .fill(0)
              .map((day, index) => {
                const currentDay = weather.days[index];
                return (
                  <WeatherCard
                    key={currentDay.date}
                    weather={currentDay}
                    handleCurrent={() => handleCurrent(index)}
                    unit={unit}
                    current={current === index}
                  />
                );
              })
          : null}
      </div>
    </main>
  );
};
export default Home;
