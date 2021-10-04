import { City } from '@store/cities/types';

export const POINTS_LOADING = 'Загрузка пунктов выдачи...';
export const POINTS_LOADING_FAILED = 'Не удалось загрузить пункты выдачи';

export const ADD_POINT_LOADING = 'Добавление пункта...';
export const ADD_POINT_LOADING_FAILED = 'Не удалось добавить пункт';
export const CHANGE_POINT_LOADING = 'Изменение пункта...';
export const CHANGE_POINT_LOADING_FAILED = 'Не удалось изменить пункт';
export const DELETE_POINT_LOADING = 'Изменение пункта...';
export const DELETE_POINT_LOADING_FAILED = 'Не удалось изменить пункт';

export interface Point {
  id?: string;
  cityId: City;
  name: string;
  address: string;
}

export interface PointsState {
  readonly points: Point[];
}

export enum PointsActionTypes {
  SET_POINTS = 'SET_POINTS'
}

export interface SetPointsAction {
  type: PointsActionTypes.SET_POINTS;
  points: Point[];
}
