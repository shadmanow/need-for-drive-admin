import { Category } from '@store/category/types';

export interface FetchCategoriesResponse {
  data: {
    data: Category[];
  };
}

export interface FetchCategoriesData {
  categories: Category[];
}
