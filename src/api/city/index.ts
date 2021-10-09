import baseApi from '../base';
import { GetCitiesData, GetCitiesResponse } from './types';

export const getCitiesReq = async (): Promise<GetCitiesData> => {
  const response: GetCitiesResponse = await baseApi.get('/api/db/city');
  return {
    cities: response.data.data
  };
};
