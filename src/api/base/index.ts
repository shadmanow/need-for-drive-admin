import axios from 'axios';

export const baseApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'X-Api-Factory-Application-Id': process.env.REACT_APP_API_APP_ID
  }
});
