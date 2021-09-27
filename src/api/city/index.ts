import baseApi from '../base';
import { FetchCitiesData, FetchCitiesResponse } from './types';

export const fetchCities = async (): Promise<FetchCitiesData> => {
  const response: FetchCitiesResponse = await baseApi.get(
    '/api/db/city?limit=10'
  );
  return {
    cities: response.data.data
  };
};
