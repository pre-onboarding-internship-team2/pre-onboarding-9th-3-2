import { ChartsType } from "./chart.types";

export const chartDatasets = (
  chartData: ChartsType[],
  colorFilteredByQueryWithArea: string[],
  colorFilteredByQueryWithBar: string[],
) => {
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
        pointHoverRadius: 8,
        fill: true,
      },
    ],
  };
  return data;
};
