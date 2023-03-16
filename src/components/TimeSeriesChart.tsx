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
import { useRef } from "react";
import { Chart } from "react-chartjs-2";
import TimeSeriesChartFilter from "./TimeSeriesChartFilter";
import { useTimeSeriesChartFilter } from "./TimeSeriesChartHooks";

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
  filterIds: { name: string; data: string[] };
};

export default function TimeSeriesChart({ props }: { props: TimeSeriesProps }) {
  const { xAxisData, yAxisLeft, yAxisRight, filterIds } = props;
  const chartRef = useRef<ChartJS>(null);

  const filterProps = useTimeSeriesChartFilter({ filterIds, chartRef });
  const { selectedIds, onClickChart } = filterProps;

  return (
    <>
      <TimeSeriesChartFilter {...filterProps} />
      <Chart
        ref={chartRef}
        onClick={onClickChart}
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
          plugins: {
            tooltip: {
              callbacks: {
                afterBody: (context) =>
                  filterIds
                    ? `${filterIds.name}: ${
                        filterIds.data[context[0].dataIndex]
                      }`
                    : "",
              },
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
              pointBackgroundColor: filterIds
                ? filterIds.data.map((filterId) =>
                    selectedIds.includes(filterId) ? "#ff0000" : "#94b799"
                  )
                : "#94b799",
              backgroundColor:
                selectedIds.length > 0 ? "#a3c2a822" : "#a3c2a880",
            },
            {
              type: "bar" as const,
              yAxisID: "yRight",
              label: yAxisRight.name,
              data: yAxisRight.data,
              backgroundColor: filterIds
                ? filterIds.data.map((filterId) =>
                    selectedIds.includes(filterId) ? "#0092e0aa" : "#7fc7efaa"
                  )
                : "#7fc7efaa",
            },
          ],
        }}
        type="line"
      />
    </>
  );
}
