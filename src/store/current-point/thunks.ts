import { Dispatch } from 'redux';

import { addPointReq, changePointReq, deletePointReq } from '@api/point';

import { AppState } from '@store/types';
import { DELETE_POINT_LOADING_FAILED, Point } from '@store/points/types';
import { setPointsAction } from '@store/points/thunks';
import { loadingStart, loadingStop } from '@store/loadings/thunks';
import { alertShow } from '@store/alert/thunks';

import {
  DELETE_POINT_LOADING,
  ADD_POINT_LOADING,
  ADD_POINT_LOADING_FAILED,
  SetCurrentPointAction,
  CHANGE_POINT_LOADING,
  CHANGE_POINT_LOADING_FAILED,
  SetCurrentPointStatus,
  CurrentPointActionTypes,
  CHANGE_POINT_LOADING_SUCCESS,
  DELETE_POINT_LOADING_SUCCESS,
  ADD_POINT_LOADING_SUCCESS
} from './types';

const setCurrentPointAction = (
  currentPoint: Point | null
): SetCurrentPointAction => ({
  type: CurrentPointActionTypes.SET_CURRENT_POINT,
  currentPoint
});

const setCurrentPointStatusAction = (
  status: boolean | null
): SetCurrentPointStatus => ({
  type: CurrentPointActionTypes.SET_CURRENT_POINT_STATUS,
  status
});

export const setCurrentPoint =
  (point: Point) => async (dispatch: Dispatch<any>) => {
    dispatch(setCurrentPointAction(point));
  };

export const clearCurrentPoint = () => async (dispatch: Dispatch<any>) => {
  dispatch(setCurrentPointAction(null));
  dispatch(setCurrentPointStatusAction(null));
};

export const addPoint =
  () => async (dispatch: Dispatch<any>, getState: () => AppState) => {
    dispatch(loadingStart(ADD_POINT_LOADING));
    try {
      const { currentPoint } = getState().currentPoint;
      if (currentPoint) {
        const { point } = await addPointReq(currentPoint);
        const { points } = getState().points;

        dispatch(setPointsAction([point, ...points]));
        dispatch(loadingStop(ADD_POINT_LOADING));

        dispatch(setCurrentPointStatusAction(true));
        dispatch(alertShow(ADD_POINT_LOADING_SUCCESS, 'success'));
      } else {
        throw new Error('No current point error');
      }
    } catch (addPointError) {
      dispatch(loadingStop(ADD_POINT_LOADING));

      dispatch(setCurrentPointStatusAction(false));
      dispatch(alertShow(ADD_POINT_LOADING_FAILED, 'error'));
      throw addPointError;
    }
  };

export const changePoint =
  () => async (dispatch: Dispatch<any>, getState: () => AppState) => {
    dispatch(loadingStart(CHANGE_POINT_LOADING));
    try {
      const { currentPoint } = getState().currentPoint;
      if (currentPoint) {
        const { point } = await changePointReq(currentPoint);
        const points = getState().points.points.filter(
          ({ id }) => id !== currentPoint.id
        );
        dispatch(setPointsAction([point, ...points]));
        dispatch(loadingStop(CHANGE_POINT_LOADING));

        dispatch(setCurrentPointStatusAction(true));
        dispatch(alertShow(CHANGE_POINT_LOADING_SUCCESS, 'success'));
      } else {
        throw new Error('No current point error');
      }
    } catch (changePointError) {
      dispatch(loadingStop(CHANGE_POINT_LOADING));

      dispatch(setCurrentPointStatusAction(false));
      dispatch(alertShow(CHANGE_POINT_LOADING_FAILED, 'error'));
      throw changePointError;
    }
  };

export const deletePoint =
  () => async (dispatch: Dispatch<any>, getState: () => AppState) => {
    dispatch(loadingStart(DELETE_POINT_LOADING));
    try {
      const { currentPoint } = getState().currentPoint;
      if (currentPoint) {
        await deletePointReq(currentPoint);
        const points = getState().points.points.filter(
          ({ id }) => id !== currentPoint.id
        );

        dispatch(setPointsAction(points));
        dispatch(loadingStop(DELETE_POINT_LOADING));

        dispatch(setCurrentPointStatusAction(true));
        dispatch(alertShow(DELETE_POINT_LOADING_SUCCESS, 'success'));
      } else {
        throw new Error('No current point error');
      }
    } catch (deletePointError) {
      dispatch(loadingStop(DELETE_POINT_LOADING));

      dispatch(setCurrentPointStatusAction(false));
      dispatch(alertShow(DELETE_POINT_LOADING_FAILED, 'error'));
      throw deletePointError;
    }
  };
