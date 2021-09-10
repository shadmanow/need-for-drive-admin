import { Dispatch } from 'redux';

import { loadingStart, loadingStop } from '@store/loading/thunks';
import { alertShow } from '@store/alert/thunks';

import { fetchCars } from '@api/car';
import { Car, CarActionTypes, SetCarsAction } from './types';

const setCarsAction = (cars: Car[]): SetCarsAction => ({
  type: CarActionTypes.SET_CARS,
  cars
});

export const getCars = () => async (dispatch: Dispatch<any>) => {
  dispatch(loadingStart('Загрузка моделей...'));
  try {
    const { cars } = await fetchCars();
    dispatch(setCarsAction(cars));
    dispatch(loadingStop('Загрузка моделей...'));
  } catch (e: any) {
    dispatch(loadingStop('Загрузка моделей...'));
    dispatch(alertShow('Не удалось загрузить модели', 'error'));
    throw e;
  }
};
