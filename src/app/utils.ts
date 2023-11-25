import dayjs from "dayjs";

export interface Details {
  location: string;
  days: Day[];
}
export interface Day {
  precip: string;
  humidity: string;
  windspeed: string;
  date: string;
  conditions: string;
  min: string;
  max: string;
  temp: string;
  icon: string;
  hours: Hour[];
}

export interface Hour {
  time: string;
  temp: string;
}
export const url = (location: string) =>
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=NGJRVE2G3QTYU7X7EGNGDEKSG&contentType=json`;

export const getData = (data: any): Details => {
  return {
    location: data.address,
    days: data.days.map((day: any) => {
      return {
        precip: day.precip,
        humidity: day.humidity,
        windspeed: day.windspeed,
        date: day.datetime,
        conditions: day.conditions,
        min: day.tempmin,
        max: day.tempmax,
        icon: day.icon,
        temp: day.temp,
        hours: day.hours.map((hour: any) => {
          return {
            time: hour.datetime,
            temp: hour.temp,
          };
        }),
      };
    }),
  };
};

export const displayDateOrHour = (currentDate: Date, weatherDate: string) => {
  return dayjs(currentDate).isSame(weatherDate, "day")
    ? dayjs(currentDate).format("dddd h:00 A")
    : dayjs(weatherDate).format("dddd");
};

export const celsiusToFahrenheit = (celsius: number) =>
  Math.round((celsius * 9) / 5 + 32);

export const convertTo12Hour = (time: string) => {
  const hour =
    typeof time === "string" && time.includes(":")
      ? Number(time.split(":")[0])
      : Number(time);
  if (hour > 12) return `${hour - 12} PM`;
  if (hour === 12) return `${hour} PM`;
  if (hour === 0) return `12 AM`;
  return `${hour} AM`;
};
