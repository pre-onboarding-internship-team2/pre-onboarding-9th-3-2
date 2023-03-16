import React, { useState, useEffect } from 'react';
import chartApi from 'api';
import { ChartDataResponse, ChartDataType } from 'types/chart.type';
import { ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ChartTooltip from 'components/ChartTooltip';

export default function Chart() {
  const [chartDatas, setChartDatas] = useState<ChartDataType[]>([]);

 const formatTimeString = (time: string): string => {
   return new Date(time).toLocaleTimeString('en-US');
 }

  const getChartData = () => {
    chartApi()
      .then((res: ChartDataResponse) => {
        const chartDataTemp = Object.entries(res).map(([time, values]) => ({
          time: formatTimeString(time),
          ...values,
        }));
        setChartDatas(chartDataTemp);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <ComposedChart
      width={1200}
      height={400}
      data={chartDatas}
      className="mx-auto"
      margin={{
        right: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="time" height={40} />
      <YAxis
        yAxisId="left"
        domain={[0, 150]}
        label={{ value: 'value_area', position: 'left', angle: '-90', offset: 0 }}
      />
      <YAxis
        yAxisId="right"
        orientation="right"
        domain={[0, 20000]}
        label={{ value: 'value_bar', position: 'right', angle: '90', offset: 15 }}
      />
      <Tooltip content={<ChartTooltip />} />
      <Legend />
      <Bar yAxisId="right" dataKey="value_bar" barSize={20} fill="#3FCAFF" />
      <Area yAxisId="left" dataKey="value_area" type="monotone" fill="#2756B5" stroke="#2756B5" />
    </ComposedChart>
  );
}
