import { useQuery } from "@tanstack/react-query";
import { getChartInfo } from "@/utils/chart-api";
import { ChartInfoType } from "@/utils/chart-api.types";

export const useChartQuery = (query: { name: string }) => {
  const { data: charts } = useQuery<ChartInfoType | undefined>(
    ["charts"],
    getChartInfo,
    {
      staleTime: 30000,
    },
  );

  const chartData = Object.entries(charts as ChartInfoType).map(
    ([key, value]) => {
      return {
        time: key,
        id: value.id,
        value_area: value.value_area,
        value_bar: value.value_bar,
      };
    },
  );

  const colorFilteredByQueryWithBar = chartData.map((chart) =>
    chart.id === query.name ? "rgba(0,128,128, 1)" : "rgba(0,128,128, 0.5)",
  );

  const colorFilteredByQueryWithArea = chartData.map((chart) =>
    chart.id === query.name ? "rgba(110, 9, 110, 1)" : "rgba(110, 9, 110, 0.5)",
  );

  return {
    chartData,
    colorFilteredByQueryWithArea,
    colorFilteredByQueryWithBar,
  };
};
