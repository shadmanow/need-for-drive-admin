import { Dispatch } from 'redux';

import { fetchCategories } from '@api/category';

import { loadingStart, loadingStop } from '@store/loadings/thunks';
import { alertShow } from '@store/alert/thunks';

import {
  Category,
  CategoriesActionTypes,
  SetCategoriesAction,
  CATEGORIES_LOADING,
  CATEGORIES_LOADING_FAILED
} from './types';

const setCategoriesAction = (categories: Category[]): SetCategoriesAction => ({
  type: CategoriesActionTypes.SET_CATEGORIES,
  categories
});

export const getCategories = () => async (dispatch: Dispatch<any>) => {
  dispatch(loadingStart(CATEGORIES_LOADING));
  try {
    const { categories } = await fetchCategories();
    dispatch(setCategoriesAction(categories));
    dispatch(loadingStop(CATEGORIES_LOADING));
  } catch (fetchCategoriesError) {
    dispatch(loadingStop(CATEGORIES_LOADING));
    dispatch(alertShow(CATEGORIES_LOADING_FAILED, 'error'));
    throw fetchCategoriesError;
  }
};
