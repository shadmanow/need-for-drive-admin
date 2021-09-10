import { OrdersStateDefault } from './default';
import { OrdersActionTypes, OrdersState, SetOrdersAction } from './types';

export const ordersReducer = (
  state: OrdersState = OrdersStateDefault,
  action: SetOrdersAction
) => {
  switch (action.type) {
    case OrdersActionTypes.SET_ORDERS:
      return { orders: action.orders };
    default:
      return state;
  }
};
