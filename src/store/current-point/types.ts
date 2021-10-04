import { Point } from '@store/points/types';

export const ADD_POINT_LOADING = 'Добавление пункта...';
export const ADD_POINT_LOADING_FAILED = 'Не удалось добавить пункт';
export const ADD_POINT_LOADING_SUCCESS = 'Пункт успешно добавлен!';

export const CHANGE_POINT_LOADING = 'Изменение пункта...';
export const CHANGE_POINT_LOADING_FAILED = 'Не удалось изменить пункт';
export const CHANGE_POINT_LOADING_SUCCESS = 'Пункт успешно изменен!';

export const DELETE_POINT_LOADING = 'Удаление пункта...';
export const DELETE_POINT_LOADING_FAILED = 'Не удалось удалить пункт';
export const DELETE_POINT_LOADING_SUCCESS = 'Пункт успешно удален!';

export interface CurrentPointState {
  readonly status: boolean | null;
  readonly currentPoint: Point | null;
}

export enum CurrentPointActionTypes {
  SET_CURRENT_POINT = 'SET_CURRENT_POINT',
  SET_CURRENT_POINT_STATUS = 'SET_CURRENT_POINT_STATUS'
}

export interface SetCurrentPointAction {
  type: CurrentPointActionTypes.SET_CURRENT_POINT;
  currentPoint: Point | null;
}

export interface SetCurrentPointStatus {
  type: CurrentPointActionTypes.SET_CURRENT_POINT_STATUS;
  status: boolean | null;
}

export type CurrentPointAction = SetCurrentPointAction | SetCurrentPointStatus;
