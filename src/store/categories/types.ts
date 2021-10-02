export const CATEGORIES_LOADING = 'Загрузка категорий...';
export const CATEGORIES_LOADING_FAILED = 'Не удалось загрузить категории';

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface CategoriesState {
  readonly categories: Category[];
}

export enum CategoriesActionTypes {
  SET_CATEGORIES = 'SET_CATEGORIES'
}

export interface SetCategoriesAction {
  type: CategoriesActionTypes.SET_CATEGORIES;
  categories: Category[];
}
