import TimeSeriesChart from "./TimeSeriesChart";
import { response } from "./mockdata.json";

export default function App() {
  return <TimeSeriesChart timeSeriesObject={response} />;
}
