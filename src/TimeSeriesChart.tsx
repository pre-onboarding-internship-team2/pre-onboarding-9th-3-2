import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

type TimeSeriesObject = {
  [time: string]: {
    id: string;
    value_bar: number;
    value_area: number;
  };
};

export default function TimeSeriesChart({
  timeSeriesObject,
}: {
  timeSeriesObject: TimeSeriesObject;
}) {
  return (
    <Chart
      type="line"
      data={{
        datasets: [
          {
            type: "bar" as const,
            label: "Bar",
            data: Object.entries(timeSeriesObject).map(([time, data]) => ({
              x: time,
              y: data,
            })),
            parsing: {
              yAxisKey: `y.value_bar`,
            },
            yAxisID: "bar",
            borderColor: "#69bded",
            backgroundColor: "#7fc7efaa",
          },
          {
            type: "line" as const,
            label: "Area",
            fill: true,
            data: Object.entries(timeSeriesObject).map(([time, data]) => ({
              x: time,
              y: data,
            })),
            parsing: {
              yAxisKey: `y.value_area`,
            },
            yAxisID: "area",
            borderColor: "#94b799",
            backgroundColor: "#a3c2a880",
          },
        ],
      }}
      options={{
        responsive: true,
        interaction: {
          mode: "index" as const,
          intersect: false,
        },
        scales: {
          area: {
            type: "linear" as const,
            display: true,
            position: "left" as const,
            title: { display: true, text: "Area" },
          },
          bar: {
            type: "linear" as const,
            display: true,
            position: "right" as const,
            title: { display: true, text: "Bar" },
          },
        },
      }}
    />
  );
}
