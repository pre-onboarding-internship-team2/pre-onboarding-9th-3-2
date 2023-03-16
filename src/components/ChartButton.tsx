import React from 'react';
import { ChartDataType } from 'types/chart.type';

interface IProps {
  locations: string[];
  handleChangeLocation: (value: string) => void;
}

export default function ChartButton({ locations, handleChangeLocation }: IProps) {
  return (
    <div className="mb-6">
      {[...locations, '필터해제']?.map((item, i) => (
        <button
          className="bg-[#87D5FF] hover:bg-[#38A5FF] text-base text-white font-bold py-1 px-3 rounded-full mx-1"
          key={i}
          onClick={() => handleChangeLocation(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
