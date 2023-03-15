import TimeSeriesChart, { TimeSeriesProps } from "./components/TimeSeriesChart";
import { response as mockData } from "./components/TimeSeriesChart.mockdata.json";

export default function App() {
  const convertedData = Object.entries(mockData).reduce<TimeSeriesProps>(
    (acc, [time, data]) => {
      return {
        xAxisData: [...acc.xAxisData, time],
        yAxisLeft: {
          ...acc.yAxisLeft,
          data: [...acc.yAxisLeft.data, data.value_area],
        },
        yAxisRight: {
          ...acc.yAxisRight,
          data: [...acc.yAxisRight.data, data.value_bar],
        },
        extraInfo: {
          ...acc.extraInfo!,
          data: [...acc.extraInfo!.data, data.id],
        },
      };
    },
    {
      xAxisData: [],
      yAxisLeft: { name: "Area", data: [] },
      yAxisRight: { name: "Bar", data: [] },
      extraInfo: { name: "ID", data: [] },
    }
  );

  return <TimeSeriesChart props={convertedData} />;
}
