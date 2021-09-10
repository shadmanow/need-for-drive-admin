import { Dispatch } from 'redux';

import { fetchOrders } from '@api/order';

import { loadingStart, loadingStop } from '@store/loading/thunks';
import { alertShow } from '@store/alert/thunks';

import { Order, OrdersActionTypes, SetOrdersAction } from './types';

const setOrdersAction = (orders: Order[]): SetOrdersAction => ({
  type: OrdersActionTypes.SET_ORDERS,
  orders
});

export const getOrders = () => async (dispatch: Dispatch<any>) => {
  dispatch(loadingStart('Загрузка заказов ...'));
  try {
    const { orders } = await fetchOrders();
    dispatch(setOrdersAction(orders));
    dispatch(loadingStop('Загрузка заказов ...'));
  } catch (e: any) {
    dispatch(loadingStop('Загрузка заказов ...'));
    dispatch(alertShow('Не удалось загрузить заказы', 'error'));
    throw e;
  }
};
