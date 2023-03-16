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
import { MouseEvent, useRef, useState } from "react";
import { Chart, getElementAtEvent } from "react-chartjs-2";

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
  filterIds?: { name: string; data: string[] };
};

export default function TimeSeriesChart({ props }: { props: TimeSeriesProps }) {
  const { xAxisData, yAxisLeft, yAxisRight, filterIds } = props;
  const filterIdSet = [...new Set(filterIds?.data)];
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const chartRef = useRef<ChartJS>(null);
  const onClickChart = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) return;
    const element = getElementAtEvent(chart, event);
    if (!element[0]) return;
    const { index } = element[0];

    const filterId = filterIds?.data[index];
    if (!filterId) return;
    setSelectedIds(
      selectedIds.includes(filterId)
        ? selectedIds.filter((selectedId) => selectedId !== filterId)
        : [...selectedIds, filterId]
    );
  };
  return (
    <>
      {filterIdSet.length <= 0 ? null : (
        <>
          {filterIdSet.map((filterId) => (
            <button
              key={filterId}
              onClick={() => {
                setSelectedIds(
                  selectedIds.includes(filterId)
                    ? selectedIds.filter(
                        (selectedId) => selectedId !== filterId
                      )
                    : [...selectedIds, filterId]
                );
              }}
            >
              {filterId}
            </button>
          ))}
          <button
            onClick={() => {
              setSelectedIds([]);
            }}
          >
            reset
          </button>
        </>
      )}
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
