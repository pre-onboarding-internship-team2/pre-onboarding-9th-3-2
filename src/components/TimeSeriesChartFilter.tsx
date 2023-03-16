import { MouseEvent } from "react";
import { color } from "./TImeSeriesChart.style";

export type FilterProps = {
  filterIdSet: string[];
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  resetSelectedId: VoidFunction;
  onClickChart: (
    event: MouseEvent<HTMLCanvasElement, globalThis.MouseEvent>
  ) => void;
};

const buttonStyle = {
  border: 0,
  borderRadius: 3,
  fontSize: 16,
  cursor: "pointer",
  marginRight: 5,
  padding: "10px 30px",
};

export default function TimeSeriesChartFilter({
  filterIdSet,
  selectedIds,
  setSelectedIds,
  resetSelectedId,
}: FilterProps) {
  return (
    <>
      {filterIdSet.length <= 0 ? null : (
        <>
          <h3>필터링</h3>
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
              style={{
                backgroundColor: selectedIds.includes(filterId)
                  ? color.dataset2_selected
                  : color.dataset2_default,
                ...buttonStyle,
              }}
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
