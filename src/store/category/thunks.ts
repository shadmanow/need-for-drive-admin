import { Dispatch } from 'redux';

import { fetchCategories } from '@api/category';

import { loadingStart, loadingStop } from '@store/loading/thunks';
import { alertShow } from '@store/alert/thunks';

import { Category, CategoryActionTypes, SetCategoriesAction } from './types';

const setCategoriesAction = (categories: Category[]): SetCategoriesAction => ({
  type: CategoryActionTypes.SET_CATEGORIES,
  categories
});

export const getCategories = () => async (dispatch: Dispatch<any>) => {
  dispatch(loadingStart('Загрузка категорий...'));
  try {
    const { categories } = await fetchCategories();
    dispatch(setCategoriesAction(categories));
    dispatch(loadingStop('Загрузка категорий...'));
  } catch (e: any) {
    dispatch(loadingStop('Загрузка категорий...'));
    dispatch(alertShow('Не удалось загрузить категории', 'error'));
    throw e;
  }
};
