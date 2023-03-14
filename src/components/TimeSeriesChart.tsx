import { useState } from 'react';
import { Chart } from 'react-chartjs-2';
import useChartData from '../hooks/useData';
import { getChartOption } from '../utils/getChartOption';
import './TimeSeriesChart.style.css';

function TimeSeriesChart() {
    const [chartOption] = useState(getChartOption);
    const { chartData } = useChartData();
    return (
        <div className="chart-container">
            <Chart type="bar" data={chartData} options={chartOption} />
        </div>
    );
}

export default TimeSeriesChart;
