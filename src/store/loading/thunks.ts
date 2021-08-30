import { Dispatch } from 'redux';
import {
  LoadingActionTypes,
  LoadingStartAction,
  LoadingStopAction
} from './types';

const loadingStartAction = (loading: string): LoadingStartAction => ({
  type: LoadingActionTypes.LOADING_START,
  loading
});

const loadingStopAction = (loading: string): LoadingStopAction => ({
  type: LoadingActionTypes.LOADING_STOP,
  loading
});

export const loadingStart = (loading?: string) => (dispatch: Dispatch<any>) => {
  dispatch(loadingStartAction(loading || ''));
};

export const loadingStop = (loading?: string) => (dispatch: Dispatch<any>) => {
  dispatch(loadingStopAction(loading || ''));
};
