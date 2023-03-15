import DATA from "../../mock_data.json";

export interface data {
  [key: string]: {
    id: string;
    value_area: number;
    value_bar: number;
  };
}

//배열 형태 데이터 및 객체 형태 데이터
export const dataArray: data[] = Object.entries(DATA.response).map(
  ([key, value]) => ({
    [key]: value,
  })
);
export const dataObject: data = DATA.response;
