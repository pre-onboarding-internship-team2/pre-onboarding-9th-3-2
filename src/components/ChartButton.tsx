import React from 'react';
interface IProps {
  locations: string[];
  handleChangeLocation: (value: string) => void;
  currentParams: string | null;
}

export default function ChartButton({ locations, handleChangeLocation, currentParams }: IProps) {
  return (
    <div className="mb-6">
      {[...locations, '필터해제']?.map((item, i) => {
        return currentParams === item ? (
          <button
            className="bg-[#38A5FF] text-base text-white font-bold py-1 px-3 rounded-full mx-1"
            key={i}
            onClick={() => handleChangeLocation(item)}
          >
            {item}
          </button>
        ) : (
          <button
            className="bg-[#87D5FF] hover:bg-[#38A5FF] text-base text-white font-bold py-1 px-3 rounded-full mx-1"
            key={i}
            onClick={() => handleChangeLocation(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
