import { useRef } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
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
  chartData: ChartsType[];
  colorFilteredByQueryWithBar: string[];
  colorFilteredByQueryWithArea: string[];
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

const HomePage: NextPage<Props> = ({
  chartData,
  colorFilteredByQueryWithBar,
  colorFilteredByQueryWithArea,
}) => {
  const router = useRouter();
  const chartRef = useRef<ChartJS<"bar" | "line", string[]>>(null);
  const locations = [...new Set(chartData.map((chart) => chart.id))];

  const labels = chartData.map(
    (chart) => `${chart.id} / ${chart.time.slice(11)}`,
  );

  const data = {
    labels,
    datasets: [
      {
        type: "bar" as const,
        label: "Bar",
        yAxisID: "bar",
        data: chartData.map((chart) => chart.value_bar),
        backgroundColor: colorFilteredByQueryWithBar,
        hoverBackgroundColor: "rgba(0,128,128, 1)",
      },
      {
        type: "line" as const,
        label: "Area",
        yAxisID: "area",
        data: chartData.map((chart) => chart.value_area),
        pointBackgroundColor: colorFilteredByQueryWithArea,
        backgroundColor: "rgba(110, 9, 110, 0.5)",
        pointHoverRadius: 5,
        fill: true,
      },
    ],
  };

  const clickHandler = (e: any) => {
    if (chartRef.current) {
      const points = chartRef.current.getElementsAtEventForMode(
        e,
        "index",
        { intersect: true },
        true,
      );
      if (points.length > 0) {
        const routingName = chartData[points[0].index].id;
        const routingNumber =
          locations.findIndex((location) => location === routingName) + 1;
        router.push(`/?name=${routingName}&nameId=${routingNumber}`);
      }
    }
    return;
  };

  return (
    <div className="container">
      <Chart
        ref={chartRef}
        type="line"
        options={options}
        data={data}
        onClick={clickHandler}
      />
      {locations.map((location, index) => (
        <Link
          href={{ pathname: "", query: { name: location, nameId: index + 1 } }}
          key={location}
        >
          {location}
        </Link>
      ))}
      <button onClick={() => router.push("/")}>reset</button>
    </div>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const data = await getChartInfo();
  const chartData = Object.entries(data).map(([key, value]) => {
    return {
      time: key,
      id: value.id,
      value_area: value.value_area,
      value_bar: value.value_bar,
    };
  });

  const colorFilteredByQueryWithBar = chartData.map((chart) =>
    chart.id === query.name ? "rgba(0,128,128, 1)" : "rgba(0,128,128, 0.5)",
  );

  const colorFilteredByQueryWithArea = chartData.map((chart) =>
    chart.id === query.name ? "rgba(110, 9, 110, 1)" : "rgba(110, 9, 110, 0.5)",
  );

  return {
    props: {
      chartData,
      colorFilteredByQueryWithBar,
      colorFilteredByQueryWithArea,
    },
  };
};
