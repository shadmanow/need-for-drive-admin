import { Dispatch } from 'redux';

import { addCarReq, changeCarReq, deleteCarReq } from '@api/car';

import { AppState } from '@store/types';
import { Car } from '@store/cars/types';
import { loadingStart, loadingStop } from '@store/loadings/thunks';
import { alertShow } from '@store/alert/thunks';
import { setCarsAction } from '@store/cars/thunks';

import {
  ADD_CAR_LOADING,
  ADD_CAR_LOADING_FAILED,
  ADD_CAR_LOADING_SUCCESS,
  CHANGE_CAR_LOADING,
  CHANGE_CAR_LOADING_FAILED,
  CHANGE_CAR_LOADING_SUCCESS,
  CurrentCarActionTypes,
  DELETE_CAR_LOADING,
  DELETE_CAR_LOADING_FAILED,
  DELETE_CAR_LOADING_SUCCESS,
  SetCurrentCarAction,
  SetCurrentCarStatusAction
} from './types';

const setCurrentCarAction = (currentCar: Car | null): SetCurrentCarAction => ({
  type: CurrentCarActionTypes.SET_CURRENT_CAR,
  currentCar
});

const setCurrentCarStatusAction = (
  status: boolean | null
): SetCurrentCarStatusAction => ({
  type: CurrentCarActionTypes.SET_CURRENT_CAR_STATUS,
  status
});

export const setCurrentCar = (car: Car) => async (dispatch: Dispatch<any>) => {
  dispatch(setCurrentCarAction(car));
};

export const clearCurrentCar = () => async (dispatch: Dispatch<any>) => {
  dispatch(setCurrentCarAction(null));
  dispatch(setCurrentCarStatusAction(null));
};

export const addCar =
  () => async (dispatch: Dispatch<any>, getState: () => AppState) => {
    dispatch(loadingStart(ADD_CAR_LOADING));
    try {
      const { currentCar } = getState().currentCar;
      if (currentCar) {
        const { car } = await addCarReq(currentCar);
        const { cars } = getState().cars;

        dispatch(setCarsAction([car, ...cars]));
        dispatch(loadingStop(ADD_CAR_LOADING));

        dispatch(setCurrentCarStatusAction(true));
        dispatch(alertShow(ADD_CAR_LOADING_SUCCESS, 'success'));
      } else {
        throw new Error('No current car error');
      }
    } catch (addCarError) {
      dispatch(loadingStop(ADD_CAR_LOADING));

      dispatch(setCurrentCarStatusAction(false));
      dispatch(alertShow(ADD_CAR_LOADING_FAILED, 'error'));
      throw addCarError;
    }
  };

export const changeCar =
  () => async (dispatch: Dispatch<any>, getState: () => AppState) => {
    dispatch(loadingStart(CHANGE_CAR_LOADING));
    try {
      const { currentCar } = getState().currentCar;
      if (currentCar) {
        const { car } = await changeCarReq(currentCar);
        const cars = getState().cars.cars.filter(
          ({ id }) => id !== currentCar.id
        );

        dispatch(setCarsAction([car, ...cars]));
        dispatch(loadingStop(CHANGE_CAR_LOADING));

        dispatch(setCurrentCarStatusAction(true));
        dispatch(alertShow(CHANGE_CAR_LOADING_SUCCESS, 'success'));
      } else {
        throw new Error('No current car error');
      }
    } catch (changeCarError) {
      dispatch(loadingStop(CHANGE_CAR_LOADING));

      dispatch(setCurrentCarStatusAction(false));
      dispatch(alertShow(CHANGE_CAR_LOADING_FAILED, 'error'));
      throw changeCarError;
    }
  };

export const deleteCar =
  () => async (dispatch: Dispatch<any>, getState: () => AppState) => {
    dispatch(loadingStart(DELETE_CAR_LOADING));
    try {
      const { currentCar } = getState().currentCar;
      if (currentCar) {
        await deleteCarReq(currentCar);
        const cars = getState().cars.cars.filter(
          ({ id }) => id !== currentCar.id
        );

        dispatch(setCarsAction(cars));
        dispatch(loadingStop(DELETE_CAR_LOADING));

        dispatch(setCurrentCarStatusAction(true));
        dispatch(alertShow(DELETE_CAR_LOADING_SUCCESS, 'success'));
      } else {
        throw new Error('No current car error');
      }
    } catch (deleteCarError) {
      dispatch(loadingStop(DELETE_CAR_LOADING));

      dispatch(setCurrentCarStatusAction(false));
      dispatch(alertShow(DELETE_CAR_LOADING_FAILED, 'error'));
      throw deleteCarError;
    }
  };
