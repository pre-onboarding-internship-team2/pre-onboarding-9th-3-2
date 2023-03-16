import { GetStaticProps, NextPage } from "next";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { getChartInfo } from "@/utils/chart-api";
import { options } from "@/utils/chart-options";

interface ChartsType {
  time: string;
  id: string;
  value_area: string;
  value_bar: string;
}

interface Props {
  charts: ChartsType[];
}

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const HomePage: NextPage<Props> = ({ charts }) => {
  const labels = charts.map((chart) => `${chart.id} / ${chart.time.slice(11)}`);

  const data = {
    labels,
    datasets: [
      {
        type: "bar" as const,
        label: "Bar",
        yAxisID: "bar",
        data: charts.map((chart) => chart.value_bar),
        backgroundColor: "rgba(0,128,128, 0.5)",
        hoverBackgroundColor: "rgba(0, 128,128, 1)",
      },
      {
        type: "line" as const,
        label: "Area",
        yAxisID: "area",
        data: charts.map((chart) => chart.value_area),
        backgroundColor: "rgba(238,130,238, 1)",
        fill: true,
      },
    ],
  };

  return (
    <Chart
      style={{
        position: "relative",
        maxWidth: "90vw",
        height: "70vh",
        maxHeight: "70vh",
      }}
      type="bar"
      options={options}
      data={data}
    />
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getChartInfo();
  const charts = [];

  for (const key in data) {
    charts.push({
      time: key,
      id: data[key].id,
      value_area: data[key].value_area,
      value_bar: data[key].value_bar,
    });
  }

  return {
    props: { charts },
  };
};
