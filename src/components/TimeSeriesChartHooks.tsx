import { MouseEvent, useState } from "react";
import { Chart as ChartJS, ChartTypeRegistry } from "chart.js";
import { getElementAtEvent } from "react-chartjs-2";

export function useTimeSeriesChartFilter({
  filterIds,
  chartRef,
}: {
  filterIds: { name: string; data: string[] };
  chartRef: React.RefObject<ChartJS<keyof ChartTypeRegistry>>;
}) {
  const filterIdSet = [...new Set(filterIds.data)];
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const resetSelectedId = () => setSelectedIds([]);

  const onClickChart = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;
    if (!chart) return;

    const element = getElementAtEvent(chart, event);
    if (!element[0]) return;

    const filterId = filterIds?.data[element[0].index];
    if (!filterId) return;

    setSelectedIds(
      selectedIds.includes(filterId)
        ? selectedIds.filter((selectedId) => selectedId !== filterId)
        : [...selectedIds, filterId]
    );
  };
  return {
    filterIdSet,
    selectedIds,
    setSelectedIds,
    resetSelectedId,
    onClickChart,
  };
}
