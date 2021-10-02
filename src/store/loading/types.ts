export interface LoadingState {
  readonly loading: string[];
}

export enum LoadingActionTypes {
  LOADING_START = 'LOADING_START',
  LOADING_STOP = 'LOADING_STOP'
}

export interface LoadingStartAction {
  type: LoadingActionTypes.LOADING_START;
  loading: string;
}

export interface LoadingStopAction {
  type: LoadingActionTypes.LOADING_STOP;
  loading: string;
}

export type LoadingAction = LoadingStartAction | LoadingStopAction;
