import React, { useEffect, useState } from "react";
import { url, Details, getData } from "../utils";
export const useWeatherFetch = (location?: string) => {
  const [weather, setWeather] = useState<Details | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [cache, setCache] = useState<{ [key: string]: Details }>({});
  useEffect(() => {
    if (!location) return;
    if (cache[location]) {
      setWeather(cache[location]);
      return;
    }
    setLoading(true);
    setWeather(undefined);
    let isFetching = true;
    fetch(url(location as string))
      .then((res) => res.json())
      .then((data) => {
        if (isFetching) {
          const weatherData = getData(data);
          setWeather(weatherData);
          setLoading(false);
          setCache({ ...cache, [location]: weatherData });
        }
      })
      .catch((err) => {
        setLoading(false);
      });
    return () => {
      isFetching = false;
    };
  }, [location]);
  return { weather, loading: loading && !!!weather };
};
