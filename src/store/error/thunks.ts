import { Dispatch } from 'redux';

import { ErrorActionTypes, SetErrorAction, ClearErrorAction } from './types';

const setErrorAction = (status: number): SetErrorAction => ({
  type: ErrorActionTypes.SET_ERROR,
  status
});

const clearErrorAction = (): ClearErrorAction => ({
  type: ErrorActionTypes.CLEAR_ERROR
});

export const setError = (status: number) => (dispatch: Dispatch<any>) =>
  dispatch(setErrorAction(status));

export const clearError = () => (dispatch: Dispatch<any>) =>
  dispatch(clearErrorAction());
