import { ChartInfoType } from "./chart-api.types";

const url = `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/19736c70-c41c-4a4a-b45f-b866eebab626/mock_data_example-flexsys.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230314T081727Z&X-Amz-Expires=86400&X-Amz-Signature=8fc529a424fccf1cc4bdc6c3ef3d367b07cd38d4c2a0196684b616cd544e2400&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data_example-flexsys.json%22&x-id=GetObject`;

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
