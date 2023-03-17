import { MockType } from "../types/mockData.type";
import mockData from "../data/mockData.json";

const dataJson = mockData.response;
export const dataArr: MockType[] = Object.entries(dataJson).map(
  ([dateData, values]) => {
    const value_area_data = {
      x: dateData,
      y: values.value_area,
    };
    const value_bar_data = {
      x: dateData,
      y: values.value_bar,
    };

    return {
      date: dateData,
      id: values.id,
      value_area: value_area_data,
      value_bar: value_bar_data,
    };
  }
);
