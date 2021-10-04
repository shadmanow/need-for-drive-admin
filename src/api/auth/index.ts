import axios from 'axios';
import baseApi from '../base';

import {
  LoginParams,
  LoginResponse,
  LoginData,
  UnauthorizedError
} from './types';

export const login = async (params: LoginParams): Promise<LoginData> => {
  try {
    const response: LoginResponse = await baseApi.request({
      method: 'POST',
      url: '/api/auth/login',
      data: params,
      headers: {
        ...baseApi.defaults.headers,
        Authorization: `Basic ${process.env.REACT_APP_API_BASIC_TOKEN}`
      }
    });
    return {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token
    };
  } catch (e: any) {
    if (axios.isAxiosError(e) && e.response?.status === 401) {
      throw new UnauthorizedError();
    }
    throw e;
  }
};

export const refreshToken = async (rToken: string): Promise<LoginData> => {
  const response: LoginResponse = await baseApi.request({
    method: 'POST',
    url: '/api/auth/refresh',
    data: {
      refresh_token: rToken
    },
    headers: {
      ...baseApi.defaults.headers,
      Authorization: `Basic ${process.env.REACT_APP_API_BASIC_TOKEN}`
    }
  });
  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token
  };
};
