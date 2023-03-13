import { useEffect } from "react";
import DATA from "../../mock_data.json";

export interface data {
  [key: string]: {
    id: string;
    value_area: number;
    value_bar: number;
  };
}

const Graph = () => {
  const dataArr: data[] = Object.entries(DATA.response).map(([key, value]) => ({
    [key]: value,
  }));
  const dataObj: data = DATA.response;

  useEffect(() => {
    console.log(dataArr);
  }, []);

  return <article></article>;
};

export default Graph;
