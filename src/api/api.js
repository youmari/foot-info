import axios from 'axios';

const fetchData = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: { 'x-rapidapi-key': '9d6e198c928b8b5844c8955c473d1464' },
});

export default fetchData;
