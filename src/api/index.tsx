import axios from 'axios';

export default async function chartApi() {
  const response = await axios.get('/data/mock_data.json');
  return response.data.response;
}
