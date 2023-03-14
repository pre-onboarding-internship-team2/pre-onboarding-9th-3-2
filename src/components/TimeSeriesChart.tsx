import { Chart, ChartProps } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import { TimeSeriesChartDataType } from '../types/chartData.types';
import './TimeSeriesChart.style.css';

function TimeSeriesChart({
    chartData,
    chartOption,
}: {
    chartData: ChartData<'bar' | 'line', TimeSeriesChartDataType[]>;
    chartOption: ChartOptions<'bar' | 'line'>;
}) {
    return (
        <div className="chart-container">
            <Chart type="bar" data={chartData} options={chartOption} />
        </div>
    );
}

export default TimeSeriesChart;
