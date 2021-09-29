import { Dispatch } from 'redux';
import {
  GLOBAL_LOADING,
  Loading,
  LoadingsActionTypes,
  LoadingStartAction,
  LoadingStopAction
} from './types';

const loadingStartAction = (loading: Loading): LoadingStartAction => ({
  type: LoadingsActionTypes.LOADING_START,
  loading
});

const loadingStopAction = (loading: Loading): LoadingStopAction => ({
  type: LoadingsActionTypes.LOADING_STOP,
  loading
});

export const loadingStart =
  (name: string, type: string = GLOBAL_LOADING) =>
  (dispatch: Dispatch<any>) => {
    dispatch(loadingStartAction({ type, name }));
  };

export const loadingStop =
  (name: string, type: string = GLOBAL_LOADING) =>
  (dispatch: Dispatch<any>) => {
    dispatch(loadingStopAction({ type, name }));
  };
