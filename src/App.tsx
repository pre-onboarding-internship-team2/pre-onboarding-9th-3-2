import { useState } from 'react';
import './App.css';
import FilterButtons from './components/FilterButtons';
import TimeSeriesChart from './components/TimeSeriesChart';
import useChartData from './hooks/useData';
import { getChartOption } from './utils/getChartOption';

function App() {
    const [chartOption] = useState(getChartOption);
    const { chartData, locations, isLoading } = useChartData();
    if (isLoading) return <div>loading...</div>;
    return (
        <div className="App">
            <TimeSeriesChart chartData={chartData} chartOption={chartOption} />
            <FilterButtons locations={locations} />
        </div>
    );
}

export default App;
