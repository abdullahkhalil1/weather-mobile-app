import axios from 'axios';
// import { REACT_API_URL } from '@env'

export const instance = axios.create({
  baseURL: `https://api.weatherapi.com/v1`,
  timeout: 600000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
  },
})

export const http = {
  get: (url) => instance.get(url).then((response) => response.data),
}
