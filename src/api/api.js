import axios from 'axios';

const fetchData = axios.create({
  baseURL: "https://v3.football.api-sports.io/",
  headers: { "x-rapidapi-key": process.env.REACT_APP_API_TOKKEN },
});

export default fetchData;
