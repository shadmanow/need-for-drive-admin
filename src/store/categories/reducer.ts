import {
  CategoriesActionTypes,
  CategoriesState,
  SetCategoriesAction
} from './types';
import { CategoriesStateDefault } from './default';

export const categoriesReducer = (
  state: CategoriesState = CategoriesStateDefault,
  action: SetCategoriesAction
): CategoriesState => {
  switch (action.type) {
    case CategoriesActionTypes.SET_CATEGORIES:
      return { categories: action.categories };
    default:
      return state;
  }
};
