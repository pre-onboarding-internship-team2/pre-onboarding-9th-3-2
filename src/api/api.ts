const BASE_URL =
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/19736c70-c41c-4a4a-b45f-b866eebab626/mock_data_example-flexsys.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230314T144433Z&X-Amz-Expires=86400&X-Amz-Signature=8e150d8a18b42b66cb498d1491a36e52b10fa9d95e44f53a4c8a3de75217a2bf&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data_example-flexsys.json%22&x-id=GetObject';

export function fetchData() {
  return fetch(`${BASE_URL}`).then((response) => response.json());
}
