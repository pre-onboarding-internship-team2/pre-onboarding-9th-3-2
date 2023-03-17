import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  LineController,
  BarController,
} from "chart.js";

import { ChartInfoType } from "./chart-api.types";

const url = `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/19736c70-c41c-4a4a-b45f-b866eebab626/mock_data_example-flexsys.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230315T084115Z&X-Amz-Expires=86400&X-Amz-Signature=3700eccdc76984177d9cfd8965065efbd12d92e90669ccc9c4f606cfb14d1adf&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data_example-flexsys.json%22&x-id=GetObject`;

export const getChartInfo = async (): Promise<ChartInfoType> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network Error`);
    }
    const json = await response.json();
    return json.response;
  } catch (error) {
    throw new Error(`Failed to fetch`);
  }
};

export const loadChart = () => {
  return ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    LineController,
    BarController,
  );
};
