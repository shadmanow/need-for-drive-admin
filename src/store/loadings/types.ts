export const GLOBAL_LOADING = 'GLOBAL_LOADING';

export interface Loading {
  type: string;
  name: string;
}

export interface LoadingsState {
  readonly loadings: Loading[];
}

export enum LoadingsActionTypes {
  LOADING_START = 'LOADING_START',
  LOADING_STOP = 'LOADING_STOP'
}

export interface LoadingStartAction {
  type: LoadingsActionTypes.LOADING_START;
  loading: Loading;
}

export interface LoadingStopAction {
  type: LoadingsActionTypes.LOADING_STOP;
  loading: Loading;
}

export type LoadingsAction = LoadingStartAction | LoadingStopAction;
