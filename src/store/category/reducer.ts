import {
  CategoryActionTypes,
  CategoryState,
  SetCategoriesAction
} from './types';
import { CategoryStateDefault } from './default';

export const categoriesReducer = (
  state: CategoryState = CategoryStateDefault,
  action: SetCategoriesAction
): CategoryState => {
  switch (action.type) {
    case CategoryActionTypes.SET_CATEGORIES:
      return { categories: action.categories };
    default:
      return state;
  }
};
