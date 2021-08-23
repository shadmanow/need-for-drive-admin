import { LoginData, LoginRequestData, LoginResponseData } from './types';
import { baseApi } from '../base';

export const login = (data: LoginRequestData): Promise<LoginData> =>
  baseApi
    .post('/auth/login', data, {
      headers: {
        ...baseApi.defaults.headers,
        Authorization: `Basic ${process.env.REACT_APP_API_BASIC_TOKEN}`
      }
    })
    .then((response: LoginResponseData) => ({
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token
    }));
