import { MockType } from "../types/mockData.type";
import { getDataBarColor, getDataLinePointColor } from "./getDataColor";
import { dataArr } from "./fetchData";

export const X_AXIS_KEY = "x";
export const Y_AXIS_KEY = "y";

const getChartDataSet = (targetID: string | null) => {
  const id_DataArr = dataArr.map((item: MockType) => item.id);

  const dataAreaSet = {
    type: "line" as const,
    label: "Area",
    data: dataArr.map((item) => item.value_area),
    parsing: {
      xAxisKey: X_AXIS_KEY,
      yAxisKey: Y_AXIS_KEY,
    },
    yAxesID: "y",
    fill: true,
    tension: 0.1,
    borderColor: "rgb(53, 162, 235)",
    backgroundColor: "rgba(53, 162, 235, 0.35)",
    pointRadius: 4,
    pointBorderColor: getDataLinePointColor(id_DataArr, targetID),
  };

  const dataBarSet = {
    type: "bar" as const,
    label: "Bar",
    data: dataArr.map((item: MockType) => item.value_bar),
    parsing: {
      xAxisKey: X_AXIS_KEY,
      yAxisKey: Y_AXIS_KEY,
    },
    yAxisID: "y1",
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: getDataBarColor(id_DataArr, targetID),
  };

  return {
    datasets: [dataAreaSet, dataBarSet],
  };
};

export default getChartDataSet;
