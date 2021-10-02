import { Dispatch } from 'redux';

import { fetchCities } from '@api/city/index';

import { loadingStart, loadingStop } from '@store/loadings/thunks';
import { alertShow } from '@store/alert/thunks';

import {
  City,
  CitiesActionTypes,
  SetCitiesAction,
  CITIES_LOADING,
  CITIES_LOADING_FAILED
} from './types';

const setCitiesAction = (cities: City[]): SetCitiesAction => ({
  type: CitiesActionTypes.SET_CITIES,
  cities
});

export const getCities = () => async (dispatch: Dispatch<any>) => {
  dispatch(loadingStart(CITIES_LOADING));
  try {
    const { cities } = await fetchCities();
    dispatch(setCitiesAction(cities));
    dispatch(loadingStop(CITIES_LOADING));
  } catch (fetchCitiesError) {
    dispatch(loadingStop(CITIES_LOADING));
    dispatch(alertShow(CITIES_LOADING_FAILED, 'error'));
    throw fetchCitiesError;
  }
};
