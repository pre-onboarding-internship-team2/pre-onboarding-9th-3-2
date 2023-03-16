import { MockType } from "types/mockData.type";
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
  LineController,
  BarController,
} from "chart.js";
import { Chart as ReactChart } from "react-chartjs-2";
import { dataAreaSet, dataBarSet } from "../utils/chartDataSet";
import { options } from "../utils/chartOption";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController
);

const TimeSeriesChart = ({ data }: { data: MockType[] }) => {
  const chartData = {
    datasets: [dataAreaSet(data), dataBarSet(data)],
  };

  return <ReactChart type="bar" data={chartData} options={options} />;
};

export default TimeSeriesChart;
