import baseApi from '../base';
import { GetCategoriesData, GetCategoriesResponse } from './types';

export const getCategoriesReq = async (): Promise<GetCategoriesData> => {
  const response: GetCategoriesResponse = await baseApi.get('/api/db/category');
  return {
    categories: response.data.data
  };
};
