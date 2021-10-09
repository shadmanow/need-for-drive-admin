import { CurrentPointStateDefault } from './default';
import {
  CurrentPointAction,
  CurrentPointActionTypes,
  CurrentPointState
} from './types';

export const currentPointReducer = (
  state: CurrentPointState = CurrentPointStateDefault,
  action: CurrentPointAction
): CurrentPointState => {
  switch (action.type) {
    case CurrentPointActionTypes.SET_CURRENT_POINT:
      return { ...state, currentPoint: action.currentPoint };
    case CurrentPointActionTypes.SET_CURRENT_POINT_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};
