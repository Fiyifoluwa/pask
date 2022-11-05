import axios from 'axios';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
});

export { instance };
