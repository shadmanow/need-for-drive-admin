import baseApi from '../base';
import { FetchPointsData, FetchPointsResponse } from './types';

export const fetchPoints = async (): Promise<FetchPointsData> => {
  const response: FetchPointsResponse = await baseApi.get('/api/db/point');
  return {
    points: response.data.data
  };
};
