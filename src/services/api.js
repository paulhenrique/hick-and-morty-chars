import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

const characters = api.get('/character');

export { api, characters };