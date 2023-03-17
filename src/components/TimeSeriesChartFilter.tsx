import { MouseEvent } from "react";
import { buttonStyle, color } from "./TImeSeriesChart.style";

export type FilterProps = {
  filterIdSet: string[];
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  resetSelectedId: VoidFunction;
  onClickChart: (
    event: MouseEvent<HTMLCanvasElement, globalThis.MouseEvent>
  ) => void;
};

export default function TimeSeriesChartFilter(props: FilterProps) {
  const { filterIdSet, selectedIds, setSelectedIds, resetSelectedId } = props;

  const handleFiltering = (filterId: string) => {
    setSelectedIds(
      selectedIds.includes(filterId)
        ? selectedIds.filter((selectedId) => selectedId !== filterId)
        : [...selectedIds, filterId]
    );
  };

  const filteredStyle = (filterId: string) => {
    return {
      backgroundColor: selectedIds.includes(filterId)
        ? color.dataset2_selected
        : color.dataset2_default,
    };
  };

  return (
    <>
      {filterIdSet.length <= 0 ? null : (
        <>
          <h3>필터링</h3>
          {filterIdSet.map((filterId) => (
            <button
              key={filterId}
              onClick={() => handleFiltering(filterId)}
              style={{ ...filteredStyle(filterId), ...buttonStyle }}
            >
              {filterId}
            </button>
          ))}
          <button onClick={resetSelectedId} style={{ ...buttonStyle }}>
            초기화
          </button>
        </>
      )}
    </>
  );
}
