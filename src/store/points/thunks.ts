import { Dispatch } from 'redux';

import { getPointsReq } from '@api/point';

import { loadingStart, loadingStop } from '@store/loadings/thunks';
import { alertShow } from '@store/alert/thunks';

import {
  Point,
  PointsActionTypes,
  POINTS_LOADING,
  POINTS_LOADING_FAILED,
  SetPointsAction
} from './types';

export const setPointsAction = (points: Point[]): SetPointsAction => ({
  type: PointsActionTypes.SET_POINTS,
  points
});

export const getPoints = () => async (dispatch: Dispatch<any>) => {
  dispatch(loadingStart(POINTS_LOADING));
  try {
    const { points } = await getPointsReq();
    dispatch(setPointsAction(points));
    dispatch(loadingStop(POINTS_LOADING));
  } catch (getPointsError) {
    dispatch(loadingStop(POINTS_LOADING));
    dispatch(alertShow(POINTS_LOADING_FAILED, 'error'));
    throw getPointsError;
  }
};
