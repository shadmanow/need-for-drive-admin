import { GlobalAction, GlobalActionTypes } from './types';

export const StartLoadingAction = (): GlobalAction => ({
  type: GlobalActionTypes.START_LOADING
});

export const EndLoadingAction = (): GlobalAction => ({
  type: GlobalActionTypes.END_LOADING
});

export const SetErrorAction = (error: string): GlobalAction => ({
  type: GlobalActionTypes.SET_ERROR,
  payload: error
});

export const ClearErrorAction = (): GlobalAction => ({
  type: GlobalActionTypes.CLEAR_ERROR
});
