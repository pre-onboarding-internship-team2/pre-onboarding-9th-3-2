import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  Title,
  LineController,
  BarController,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import {
  reduceBySecond,
  reduceAreaData,
  reduceBarData,
  reduceDataColor,
} from "../functions/filterFunc";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  Title,
  LineController,
  BarController
);

const labels = reduceBySecond();

const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "초 단위 데이터 변동그래프",
    },
  },
  scales: {
    ["left-y"]: {
      position: "left",
      max: 20000,
    },
    ["right-y"]: {
      position: "right",
      max: 200,
    },
  },
};

const data: ChartData = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "LINE",
      yAxisID: "right-y",
      borderWidth: 2,
      borderColor: reduceDataColor(),
      fill: true,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      data: reduceAreaData(),
    },
    {
      type: "bar" as const,
      label: "BAR",
      yAxisID: "left-y",
      backgroundColor: reduceDataColor(),
      data: reduceBarData(),
    },
  ],
};

const Graph = () => {
  return (
    <article>
      <Chart type="line" options={options} data={data} />
    </article>
  );
};

export default Graph;
