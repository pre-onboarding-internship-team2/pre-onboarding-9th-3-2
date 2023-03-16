import React, { useState, useCallback } from 'react';
import useChart from 'hooks/useChart';

import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';
import ChartTooltip from 'components/ChartTooltip';
import ChartButton from 'components/ChartButton';

export default function Chart() {
  const { chartDatas, locations } = useChart();
  const [location, setLocation] = useState('');

  const handleChangeLocation = (value: string) => {
    setLocation(value);
  };

  const handleClick = (value: string) => {
    setLocation(value);
  };

  return (
    <>
      <ChartButton locations={locations()} handleChangeLocation={handleChangeLocation} />
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <ComposedChart
          height={400}
          data={chartDatas}
          className="mx-auto"
          margin={{
            right: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="time"
            height={40}
            label={{ position: 'insideBottomRight', offset: -10 }}
          />
          <YAxis
            yAxisId="left"
            domain={[0, 150]}
            label={{ value: 'value_area', position: 'left', angle: '-90', offset: 15 }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 20000]}
            label={{ value: 'value_bar', position: 'right', angle: '90', offset: 15 }}
          />
          <Tooltip content={<ChartTooltip />} />
          <Legend />
          <Bar
            yAxisId="right"
            onClick={(value) => handleClick(value.id)}
            dataKey="value_bar"
            barSize={20}
            fill="#AFE7FF"
          >
            {chartDatas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.id === location ? '#3FCAFF' : '#AFE7FF'} />
            ))}
          </Bar>
          <Area
            yAxisId="left"
            dataKey="value_area"
            type="monotone"
            fill="#38A5FF"
            stroke="#38A5FF"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
}
