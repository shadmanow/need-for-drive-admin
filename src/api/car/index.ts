import baseApi from '../base';
import { FetchCarsData, FetchCarsResponse } from './types';

export const fetchCars = async (): Promise<FetchCarsData> => {
  const response: FetchCarsResponse = await baseApi.get('/api/db/car');
  return {
    cars: response.data.data
  };
};
