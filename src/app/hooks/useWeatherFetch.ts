import React, { useEffect, useState } from "react";
import { url, Details, getData } from "../utils";
export const useWeatherFetch = (location?: string) => {
  const [weather, setWeather] = useState<Details | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    setWeather(undefined);
    let isFetching = true;
    if (!location) return;
    fetch(url(location as string))
      .then((res) => res.json())
      .then((data) => {
        if (isFetching) {
          setWeather(getData(data));
          setLoading(false);
        }
      });
    return () => {
      isFetching = false;
    };
  }, [location]);
  return { weather, loading };
};
