import { Dispatch } from 'redux';

import { fetchCities } from '@api/city/index';

import { loadingStart, loadingStop } from '@store/loading/thunks';
import { alertShow } from '@store/alert/thunks';

import { City, CityActionTypes, SetCitiesAction } from './types';

const setCitiesAction = (cities: City[]): SetCitiesAction => ({
  type: CityActionTypes.SET_CITIES,
  cities
});

export const getCities = () => async (dispatch: Dispatch<any>) => {
  dispatch(loadingStart('Загрузка городов...'));
  try {
    const { cities } = await fetchCities();
    dispatch(setCitiesAction(cities));
    dispatch(loadingStop('Загрузка городов...'));
  } catch (fetchCitiesError) {
    dispatch(loadingStop('Загрузка городов...'));
    dispatch(alertShow('Не удалось загрузить города', 'error'));
    throw fetchCitiesError;
  }
};
