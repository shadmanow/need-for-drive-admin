export interface GlobalState {
  loading: boolean;
  error: string | null;
}

export enum GlobalActionTypes {
  START_LOADING = 'START_LOADING',
  END_LOADING = 'END_LOADING',
  SET_ERROR = 'SET_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR'
}

export interface StartLoadingAction {
  type: GlobalActionTypes.START_LOADING;
}

export interface EndLoadingAction {
  type: GlobalActionTypes.END_LOADING;
}

export interface SetErrorAction {
  type: GlobalActionTypes.SET_ERROR;
  payload: string;
}

export interface ClearErrorAction {
  type: GlobalActionTypes.CLEAR_ERROR;
}

export type GlobalAction =
  | StartLoadingAction
  | EndLoadingAction
  | SetErrorAction
  | ClearErrorAction;
