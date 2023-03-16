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

// 데이터에 사용 될 색을 담은 객체
export const dataColor: { [key: string]: string } = {
  성북구: "#204051",
  강남구: "#3B6978",
  노원구: "#84A9AC",
  중랑구: "#CAE8D5",
};
