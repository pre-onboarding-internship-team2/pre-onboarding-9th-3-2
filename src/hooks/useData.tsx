import { useQuery } from 'react-query';
import { IChart, IHistoricalData } from '../components/types';
import { fetchData } from '../api/api';

function useData() {
  const { isLoading, isError, data: data, error } = useQuery<IChart>('flexsys', fetchData);

  if (isLoading) {
    return { isLoading };
  }

  const historicalData = Object.entries(data!.response).map(([key, val]) => {
    return { datetime: key, ...val };
  }) as IHistoricalData[];

  // TODO: 필터링
  const regions = [...new Set(historicalData.map((data) => data.id))];

  const chartOptions = {
    options: {
      chart: {
        id: 'flexsys',
        // toolbar: {
        //   show: false,
        // },
      },
      title: {
        text: 'Flexsys',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [0, 2, 5],
      },
      xaxis: {
        categories: historicalData.map((data) => data.datetime),
      },
      yaxis: [
        {
          seriesName: 'Bar',
          opposite: true,

          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
          },
          title: {
            text: 'Bar',
          },
        },
        {
          seriesName: 'Area',
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
          },
          title: {
            text: 'Area',
          },
        },
      ],
    },
    series: [
      {
        name: 'Bar',
        data: historicalData.map((data) => data.value_bar),
        type: 'bar',
      },
      {
        name: 'Area',
        data: historicalData.map((data) => data.value_area),
        type: 'area',
      },
    ],
  };
  return { isLoading, chartOptions };
}

export default useData;
