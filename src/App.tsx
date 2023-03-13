import './App.css';
import TimeSeriesChart from './components/TimeSeriesChart';
import useData from './hooks/useData';

function App() {
    useData();

    return (
        <div className="App">
            <TimeSeriesChart />
        </div>
    );
}

export default App;
