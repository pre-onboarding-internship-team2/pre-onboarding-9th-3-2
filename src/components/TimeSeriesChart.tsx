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
  LogarithmicScale,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  LogarithmicScale,
  Filler,
  Title,
  Tooltip,
  Legend
);

export type TimeSeriesProps = {
  xAxisData: string[];
  yAxisLeft: { name: string; data: number[] };
  yAxisRight: { name: string; data: number[] };
};

export default function TimeSeriesChart({ props }: { props: TimeSeriesProps }) {
  const { xAxisData, yAxisLeft, yAxisRight } = props;

  return (
    <Chart
      options={{
        interaction: {
          mode: "index" as const,
          intersect: false,
        },
        scales: {
          yLeft: {
            type: "linear" as const,
            display: true,
            position: "left" as const,
            title: { display: true, text: yAxisLeft.name },
          },
          yRight: {
            type: "linear" as const,
            display: true,
            position: "right" as const,
            title: { display: true, text: yAxisRight.name },
          },
        },
      }}
      data={{
        labels: xAxisData,
        datasets: [
          {
            type: "line" as const,
            yAxisID: "yLeft",
            fill: true,
            label: yAxisLeft.name,
            data: yAxisLeft.data,
            borderColor: "#94b799",
            backgroundColor: "#a3c2a880",
          },
          {
            type: "bar" as const,
            yAxisID: "yRight",
            label: yAxisRight.name,
            data: yAxisRight.data,
            borderColor: "#69bded",
            backgroundColor: "#7fc7efaa",
          },
        ],
      }}
      type="line"
    />
  );
}
