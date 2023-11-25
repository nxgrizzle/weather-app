import { Icon } from "@iconify/react";
import React from "react";
export const WeatherIcon = ({
  icon,
  size = "w-12 h-12",
}: {
  icon: string;
  size?: string;
}) => {
  if (icon === "clear-day") {
    return <Icon icon="wi-day-sunny" className={size} />;
  } else if (icon === "cloudy") {
    return <Icon icon="wi-cloudy" className={size} />;
  } else if (icon === "partly-cloudy-day") {
    return <Icon icon="wi-day-cloudy" className={size} />;
  } else {
    return <Icon icon="wi-rain" className={size} />;
  }
};
