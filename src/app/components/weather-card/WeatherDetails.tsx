import React from "react";
import { Day, celsiusToFahrenheit, displayDateOrHour } from "../../utils";
import { WeatherIcon } from "./WeatherIcon";
import { WeatherChart } from "./WeatherChart";
import { withLoading } from "../hoc/withLoading";
export const WeatherDetails = ({
  weather,
  unit,
  handleUnit,
}: {
  weather: Day;
  unit: "C" | "F";
  handleUnit: (unit: "C" | "F") => void;
}) => {
  return (
    <div className="border-2 border-white p-2 rounded-md w-full pt-4 min-h-[12rem]">
      <div className="flex flex-row justify-between items-start w-full">
        <div className="flex flex-row items-start justify-start gap-x-3">
          <div className="flex flex-row gap-x-2">
            <WeatherIcon icon={weather.icon} size="h-20 w-20" />
            <p className="text-5xl font-light mt-3" data-testid="temp">
              {unit === "F"
                ? celsiusToFahrenheit(Number(weather.temp))
                : weather.temp}
              °
            </p>
            <p
              onClick={() => handleUnit("C")}
              className={`text-xl font-light mt-3 cursor-pointer ${
                unit === "C" ? "font-bold" : ""
              }`}
            >
              C°|
            </p>
            <p
              onClick={() => handleUnit("F")}
              className={`text-xl font-light mt-3 cursor-pointer ${
                unit === "F" ? "font-bold" : ""
              }`}
            >
              F°
            </p>
          </div>
          <div className="mt-3 font-medium">
            <p className="text-xs" data-testid="humidity">
              Humidity: {weather.humidity}%
            </p>
            <p className="text-xs" data-testid="windspeed">
              Windspeed: {weather.windspeed}mph
            </p>
            <p className="text-xs" data-testid="precip">
              Precipitation: {weather.precip}%
            </p>
          </div>
        </div>
        <div className="mt-1 text-right">
          <p className="">Weather</p>
          <p>{displayDateOrHour(new Date(), weather.date)}</p>
          <p>{weather.conditions}</p>
        </div>
      </div>
      <WeatherChart weather={weather} unit={unit} />
    </div>
  );
};

export const WeatherDetailsLoading = withLoading(WeatherDetails);
