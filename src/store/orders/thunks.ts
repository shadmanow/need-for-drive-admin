import { Dispatch } from 'redux';

import { getOrdersReq } from '@api/order';

import { loadingStart, loadingStop } from '@store/loadings/thunks';
import { alertShow } from '@store/alert/thunks';

import {
  Order,
  OrdersActionTypes,
  SetOrdersAction,
  ORDERS_LOADING,
  ORDERS_LOADING_FAILED
} from './types';

export const setOrdersAction = (orders: Order[]): SetOrdersAction => ({
  type: OrdersActionTypes.SET_ORDERS,
  orders
});

export const getOrders = () => async (dispatch: Dispatch<any>) => {
  dispatch(loadingStart(ORDERS_LOADING));
  try {
    const { orders } = await getOrdersReq();
    dispatch(setOrdersAction(orders));
    dispatch(loadingStop(ORDERS_LOADING));
  } catch (getOrdersError) {
    dispatch(loadingStop(ORDERS_LOADING));
    dispatch(alertShow(ORDERS_LOADING_FAILED, 'error'));
    throw getOrdersError;
  }
};
