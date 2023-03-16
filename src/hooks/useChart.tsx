import React, { useEffect, useState } from 'react';
import chartApi from 'api';
import { ChartDataResponse, ChartDataType } from 'types/chart.type';

export default function useChart() {
  const [chartDatas, setChartDatas] = useState<ChartDataType[]>([]);

  const formatTimeString = (time: string): string => {
    return new Date(time).toLocaleTimeString('en-US');
  };

  const locations = () => {
    if (!chartDatas) return [];
    return [...new Set(chartDatas.map((data) => data.id))];
  };

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

  return { chartDatas, locations };
}




