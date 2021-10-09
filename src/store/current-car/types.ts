import { Car } from '@store/cars/types';

export const ADD_CAR_LOADING = 'Добавление автомобиля...';
export const ADD_CAR_LOADING_FAILED = 'Не удалось добавить автомобиль';
export const ADD_CAR_LOADING_SUCCESS = 'Автомобиль успешно добавлен!';

export const CHANGE_CAR_LOADING = 'Изменение автомобиля...';
export const CHANGE_CAR_LOADING_FAILED = 'Не удалось изменить автомобиль';
export const CHANGE_CAR_LOADING_SUCCESS = 'Автомобиль успешно изменен!';

export const DELETE_CAR_LOADING = 'Изменение автомобиля...';
export const DELETE_CAR_LOADING_FAILED = 'Не удалось изменить автомобиль';
export const DELETE_CAR_LOADING_SUCCESS = 'Автомобиль успешно удален!';

export interface CurrentCarState {
  readonly status: boolean | null;
  readonly currentCar: Car | null;
}

export enum CurrentCarActionTypes {
  SET_CURRENT_CAR = 'SET_CURRENT_CAR',
  SET_CURRENT_CAR_STATUS = 'SET_CURRENT_CAR_STATUS'
}

export interface SetCurrentCarAction {
  type: CurrentCarActionTypes.SET_CURRENT_CAR;
  currentCar: Car | null;
}

export interface SetCurrentCarStatusAction {
  type: CurrentCarActionTypes.SET_CURRENT_CAR_STATUS;
  status: boolean | null;
}

export type CurrentCarAction = SetCurrentCarStatusAction | SetCurrentCarAction;
