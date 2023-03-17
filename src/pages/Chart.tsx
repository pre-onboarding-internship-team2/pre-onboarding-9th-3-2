import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
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
import CustomDot from 'components/CustomDot';

export default function Chart() {
  const navigate = useNavigate();
  const { chartDatas, locations } = useChart();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams.get('id');

  const handleChangeLocation = (value: string) => {
    if (value === '필터해제') {
      navigate('/');
    } else {
      setSearchParams({ id: value });
    }
  };

  const handleClick = (data: any) => {
    if (!data.activePayload) return null;
    setSearchParams({ id: data.activePayload[0].payload.id });
    console.log(data);
  };

  return (
    <>
      <h1 className="text-2xl mb-5 font-bold">2023-02-01</h1>
      <ChartButton
        locations={locations()}
        handleChangeLocation={handleChangeLocation}
        currentParams={currentParams}
      />
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <ComposedChart
          onClick={handleClick}
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
          <Bar yAxisId="right" dataKey="value_bar" barSize={20} fill="#AFE7FF">
            {chartDatas.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.id === currentParams ? '#3FCAFF' : '#AFE7FF'}
              />
            ))}
          </Bar>
          <Area
            yAxisId="left"
            dataKey="value_area"
            type="monotone"
            fill="#38A5FF"
            stroke="#38A5FF"
            dot={<CustomDot currentParams={currentParams} />}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
}
