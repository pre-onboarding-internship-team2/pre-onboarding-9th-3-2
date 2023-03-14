import Chart from "./components/TimeSeriesChart";
import mockData from "./data/mockData.json";
import { MockType } from "types/mockData.type";

function App() {
  const dataJson = JSON.parse(JSON.stringify(mockData.response));
  const dataArr: MockType[] = Object.keys(dataJson).map(function (_) {
    return Object.assign({ date: _ }, dataJson[_]);
  });

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h3>Flexsys </h3>
      <Chart data={dataArr} />
    </div>
  );
}

export default App;
