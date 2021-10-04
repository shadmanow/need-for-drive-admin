import axios from 'axios';
import cookies from 'react-cookies';

import { store } from '@store/store';
import { setError } from '@store/error/thunks';
import { refreshToken } from '@api/auth';

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
    const request = error.config;

    if (error.response?.status) {
      setError(error.response.status)(store.dispatch);

      if (error.response.status === 401) {
        const user = cookies.load('user');
        if (user?.refreshToken) {
          const auth = await refreshToken(user.refreshToken);
          cookies.save('user', { ...auth }, { path: '/' });
          request.headers = {
            ...request.headers,
            Authrorization: `Bearer ${auth.accessToken}`
          };
          return baseApi(request);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default baseApi;
