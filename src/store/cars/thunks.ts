import { Dispatch } from 'redux';

import { fetchCars } from '@api/car';

import { loadingStart, loadingStop } from '@store/loadings/thunks';
import { alertShow } from '@store/alert/thunks';

import {
  Car,
  CarsActionTypes,
  SetCarsAction,
  CARS_LOADING,
  CARS_LOADING_FAILED
} from './types';

const setCarsAction = (cars: Car[]): SetCarsAction => ({
  type: CarsActionTypes.SET_CARS,
  cars
});

export const getCars = () => async (dispatch: Dispatch<any>) => {
  dispatch(loadingStart(CARS_LOADING));
  try {
    const { cars } = await fetchCars();
    dispatch(setCarsAction(cars));
    dispatch(loadingStop(CARS_LOADING));
  } catch (fetchCarsError) {
    dispatch(loadingStop(CARS_LOADING));
    dispatch(alertShow(CARS_LOADING_FAILED, 'error'));
    throw fetchCarsError;
  }
};
