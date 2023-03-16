import './App.css';
import TimeSeriesChart from './components/TimeSeriesChart';
import registChartJS from './utils/registChartJS';

registChartJS();

function App() {
    return (
        <div className="App">
            <TimeSeriesChart />
        </div>
    );
}

export default App;
