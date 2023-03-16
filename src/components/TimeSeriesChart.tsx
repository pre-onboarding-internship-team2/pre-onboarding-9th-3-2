import { Chart } from 'react-chartjs-2';
import useChartData from '../hooks/useData';
import { getChartOption } from '../utils/getChartOption';
import './TimeSeriesChart.style.css';

const chartOptions = getChartOption();

function TimeSeriesChart() {
    const { chartData } = useChartData();
    return (
        <div className="chart-container">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    );
}

export default TimeSeriesChart;
