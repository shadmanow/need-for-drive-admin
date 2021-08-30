import axios from 'axios';
import baseApi from '../base';

import {
  LoginParams,
  LoginResponse,
  LoginData,
  LoginUnauthorizedError
} from './types';

export const login = async (data: LoginParams): Promise<LoginData> => {
  try {
    const response: LoginResponse = await baseApi.request({
      method: 'POST',
      url: '/auth/login',
      data,
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
      throw new LoginUnauthorizedError();
    }
    throw e;
  }
};
