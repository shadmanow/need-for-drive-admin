import { City } from '@store/cities/types';

export const POINTS_LOADING = 'Загрузка пунктов выдачи...';
export const POINTS_LOADING_FAILED = 'Не удалось загрузить пункты выдачи';

export interface Point {
  id: string;
  cityId: City;
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
