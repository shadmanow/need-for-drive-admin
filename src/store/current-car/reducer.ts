import { CurrentCarStateDefault } from './default';
import {
  CurrentCarAction,
  CurrentCarActionTypes,
  CurrentCarState
} from './types';

export const currentCarReducer = (
  state: CurrentCarState = CurrentCarStateDefault,
  action: CurrentCarAction
): CurrentCarState => {
  switch (action.type) {
    case CurrentCarActionTypes.SET_CURRENT_CAR:
      return { ...state, currentCar: action.currentCar };
    case CurrentCarActionTypes.SET_CURRENT_CAR_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};
