import baseApi from '../base';
import { FetchCategoriesData, FetchCategoriesResponse } from './types';

export const fetchCategories = async (): Promise<FetchCategoriesData> => {
  const response: FetchCategoriesResponse = await baseApi.get(
    '/api/db/category'
  );
  return {
    categories: response.data.data
  };
};
