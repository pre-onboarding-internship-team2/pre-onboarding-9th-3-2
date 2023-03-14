import { Container, Heading, Skeleton } from '@chakra-ui/react';

import Chart from 'react-apexcharts';
import useData from '../hooks/useData';

function AreaBarChart() {
  const { isLoading, chartOptions } = useData();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <Container centerContent alignContent={'center'}>
        <Chart options={chartOptions?.options} series={chartOptions?.series} width="1200"></Chart>
      </Container>
    </div>
  );
}

export default AreaBarChart;
