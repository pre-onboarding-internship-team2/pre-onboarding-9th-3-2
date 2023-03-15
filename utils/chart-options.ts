import { ChartOptions } from "chart.js";

export const options: ChartOptions<"bar" | "line"> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    bar: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      title: {
        display: true,
        text: "Bar",
      },
      ticks: {
        stepSize: 5000,
      },
    },
    area: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      title: {
        display: true,
        text: "Area",
      },
      ticks: {
        stepSize: 30,
      },
      grid: {
        drawOnChartArea: false,
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: "시계열 차트",
    },
  },
};
