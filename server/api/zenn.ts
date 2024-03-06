import axios from 'axios';

export default defineEventHandler(async(event) => {
  const response = await axios.get('https://zenn.dev/api/articles?username=nemunyan');
  const data = response.data;
  return data;
});
