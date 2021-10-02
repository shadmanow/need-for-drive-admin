import { Category } from '@store/categories/types';

export interface FetchCategoriesResponse {
  data: {
    data: Category[];
  };
}

export interface FetchCategoriesData {
  categories: Category[];
}
