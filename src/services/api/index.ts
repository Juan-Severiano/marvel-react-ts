import axios from "axios";

const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
const hash = process.env.REACT_APP_MARVEL_HASH;

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    ts: 1,
    apikey: apiKey,
    hash: hash,
  },
});

export default api;