import axios from 'axios';

const fetchData = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: { 'x-rapidapi-key': 'a5eb3544d12b975b89d4b5f3af47cedd' },
});

export default fetchData;
