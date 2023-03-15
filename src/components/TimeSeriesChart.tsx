import { ChartData, ChartOptions } from 'chart.js';
import { forwardRef } from 'react';
import { Chart } from 'react-chartjs-2';
import { TimeSeriesChartDataType } from '../types/chartData.types';

interface TimeSeriesChartProps {
    chartData: ChartData<'bar' | 'line', TimeSeriesChartDataType[]>;
    chartOption: ChartOptions<'bar' | 'line'>;
    onClick: React.MouseEventHandler<HTMLCanvasElement>;
}

// TODO ref type 수정
export default forwardRef<any, TimeSeriesChartProps>(({ chartData, chartOption, onClick }, ref) => {
    return (
        <div className="chart-container">
            <Chart onClick={onClick} type="bar" data={chartData} options={chartOption} ref={ref} />
        </div>
    );
});
