import React, { useState, useEffect } from 'react';
import chartApi from 'api';
import { ChartDataResponse, ChartDataType } from 'types/chart.type';
import { ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Chart() {
  const [chartDatas, setChartDatas] = useState<ChartDataType[]>([]);

  const getChartData = () => {
    chartApi()
      .then((res: ChartDataResponse) => {
        const response = Object.entries(res).map(([time, values]) => ({
          time: new Date(time).toLocaleTimeString('en-US'),
          ...values,
        }));
        setChartDatas(response);
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
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="time" height={40} />
      <YAxis
        yAxisId="left"
        domain={[0, 200]}
        label={{ value: 'value_area', position: 'left', angle: '-90', offset: 0 }}
      />
      <YAxis
        yAxisId="right"
        orientation="right"
        domain={[0, 20000]}
        label={{ value: 'value_bar', position: 'right', angle: '90', offset: 15 }}
      />
      <Tooltip />
      <Legend />
      <Bar yAxisId="right" dataKey="value_bar" barSize={20} fill="#3FCAFF" />
      <Area yAxisId="left" dataKey="value_area" type="monotone" fill="#2756B5" stroke="#2756B5" />
    </ComposedChart>
  );
}
