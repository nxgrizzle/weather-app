import React, { useEffect, useState } from "react";
import { url, Details, getData } from "../utils";
export const useWeatherFetch = (location?: string) => {
  const [weather, setWeather] = useState<Details>();
  useEffect(() => {
    let isFetching = true;
    if (!location) return;
    fetch(url(location as string))
      .then((res) => res.json())
      .then((data) => {
        if (isFetching) {
          setWeather(getData(data));
        }
      });
    return () => {
      isFetching = false;
    };
  }, [location]);
  return weather;
};
