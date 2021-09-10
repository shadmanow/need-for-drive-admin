import axios from 'axios';
import cookies from 'react-cookies';

import { store } from '@store/store';
import { setError } from '@store/error/thunks';

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'X-Api-Factory-Application-Id': process.env.REACT_APP_API_APP_ID
  }
});

baseApi.interceptors.request.use(
  async (config) => {
    const user = cookies.load('user');
    if (user?.accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${user.accessToken}`
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

baseApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status) {
      setError(error.response.status)(store.dispatch);
    }
    return Promise.reject(error);
  }
);

export default baseApi;
