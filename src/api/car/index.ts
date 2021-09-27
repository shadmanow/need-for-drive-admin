import baseApi from '../base';
import { FetchCarsData, FetchCarsResponse } from './types';

export const fetchCars = async (): Promise<FetchCarsData> => {
  const response: FetchCarsResponse = await baseApi.get('/api/db/car?limit=10');
  return {
    cars: response.data.data.map((car) => {
      const { thumbnail } = car;
      if (thumbnail?.path.startsWith('/files')) {
        thumbnail.path = `${process.env.REACT_APP_API_URL}/${thumbnail.path}`;
      }
      return car;
    })
  };
};
