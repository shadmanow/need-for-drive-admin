import { Category } from '@store/categories/types';

export interface GetCategoriesResponse {
  data: {
    data: Category[];
  };
}

export interface GetCategoriesData {
  categories: Category[];
}
