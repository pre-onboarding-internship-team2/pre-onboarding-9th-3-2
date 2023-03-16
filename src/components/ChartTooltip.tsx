import React from "react";
import { TooltipProps } from 'recharts';

export default function ChartTooltip({ active, payload }: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    const tooltipData = payload[0].payload;
    return (
      <div className="custom-tooltip bg-white/90 p-3 rounded">
        <p className="label font-bold">{`${tooltipData.id}`}</p>
        <p className="desc text-[#3FCAFF]">{`value_bar : ${tooltipData.value_bar}`}</p>
        <p className="desc text-[#2756B5]">{`value_area : ${tooltipData.value_area}`}</p>
      </div>
    );
  }

  return null;
};
