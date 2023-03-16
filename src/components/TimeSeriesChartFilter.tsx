import { MouseEvent } from "react";

export type FilterProps = {
  filterIdSet: string[];
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  resetSelectedId: VoidFunction;
  onClickChart: (
    event: MouseEvent<HTMLCanvasElement, globalThis.MouseEvent>
  ) => void;
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
          <button onClick={resetSelectedId}>reset</button>
        </>
      )}
    </>
  );
}
