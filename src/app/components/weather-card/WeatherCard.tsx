import React from "react";
import { Day, celsiusToFahrenheit } from "../../utils";
import { WeatherIcon } from "./WeatherIcon";
import dayjs from "dayjs";
export const WeatherCard = ({
  weather,
  handleCurrent,
  unit,
}: {
  weather: Day;
  handleCurrent: () => void;
  unit: "C" | "F";
}) => {
  return (
    <div
      key={weather.date}
      data-testid={"weather-card"}
      className="border-2 border-white p-2 rounded-md flex flex-col justify-center items-center min-w-[7rem] min-h-[7rem] cursor-pointer hover:scale-105 transition-all duration-150"
      onClick={handleCurrent}
    >
      <h2>{dayjs(weather.date).format("ddd")}</h2>
      <WeatherIcon icon={weather.icon} />
      <div className="flex flex-row justify-center gap-x-3 items-center w-full border-t-2 border-white ">
        <p>
          {unit === "F"
            ? celsiusToFahrenheit(Number(weather.min))
            : weather.min}
          °
        </p>
        <p>
          {unit === "F"
            ? celsiusToFahrenheit(Number(weather.max))
            : weather.max}
          °
        </p>
      </div>
    </div>
  );
};
