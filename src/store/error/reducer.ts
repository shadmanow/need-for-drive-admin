import { ErrorAction, ErrorActionTypes, ErrorState } from './types';
import { ErrorStateDefault } from './default';

export const errorReducer = (
  state: ErrorState = ErrorStateDefault,
  action: ErrorAction
): ErrorState => {
  switch (action.type) {
    case ErrorActionTypes.SET_ERROR:
      return { lastError: { status: action.status } };
    case ErrorActionTypes.CLEAR_ERROR:
      return { lastError: null };
    default:
      return state;
  }
};
