import React, { useMemo } from "react";
import { Day, celsiusToFahrenheit, convertTo12Hour } from "../../utils";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  CoreChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const WeatherChart = ({
  weather,
  unit,
}: {
  weather: Day;
  unit: "F" | "C";
}) => {
  const options: CoreChartOptions<"line"> = {
    responsive: true,
    //@ts-ignore
    scales: {
      x: {
        ticks: {
          color: "white",
          callback: function (value: string, index: number, values: any[]) {
            if (index % 2 === 0) return convertTo12Hour(value);
            else return "";
          },
        },
      },
      y: {
        ticks: {
          color: "white",
          callback: function (value: string, index: number, values: any[]) {
            if (index === values.length - 1) return value + `° ${unit}`;
            else return "";
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0,0, 1)",
        titleFontColor: "white",
        bodyFontColor: "black",
        callbacks: {
          label: function (tooltipItem: any) {
            return tooltipItem.raw + `° ${unit}`;
          },
        },
      },
    },

    title: {
      display: false,
    },
  };

  const labels = weather.hours.map((hour) => convertTo12Hour(hour.time));

  const data = {
    labels,
    datasets: [
      {
        label: "Weather",
        data: weather.hours.map((hour) =>
          unit === "F"
            ? celsiusToFahrenheit(Number(hour.temp))
            : Number(hour.temp)
        ),
        borderColor: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        tension: 0.3,
        yAxisID: "y",
        xAxisID: "x",
      },
    ],
  };
  return (
    <div className="w-full max-x-[12rem] mt-3">
      <Line data={data} options={options} />
    </div>
  );
};
