import { CurrentOrderStateDefault } from './default';
import {
  CurrentOrderState,
  CurrentOrderAction,
  CurrentOrderActionTypes
} from './types';

export const currentOrderReducer = (
  state: CurrentOrderState = CurrentOrderStateDefault,
  action: CurrentOrderAction
): CurrentOrderState => {
  switch (action.type) {
    case CurrentOrderActionTypes.SET_CURRENT_ORDER:
      return { ...state, currentOrder: action.currentOrder };
    case CurrentOrderActionTypes.SET_CURRENT_ORDER_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};
