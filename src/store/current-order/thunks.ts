import { Dispatch } from 'redux';

import { changeOrderReq, deleteOrderReq } from '@api/order';

import { AppState } from '@store/types';
import { Order } from '@store/orders/types';
import { setOrdersAction } from '@store/orders/thunks';
import { loadingStart, loadingStop } from '@store/loadings/thunks';
import { alertShow } from '@store/alert/thunks';

import {
  CHANGE_ORDER_LOADING,
  CHANGE_ORDER_LOADING_FAILED,
  CHANGE_ORDER_LOADING_SUCCESS,
  CurrentOrderActionTypes,
  DELETE_ORDER_LOADING,
  DELETE_ORDER_LOADING_FAILED,
  DELETE_ORDER_LOADING_SUCCESS,
  SetCurrentOrderAction,
  SetCurrentOrderStatusAction
} from './types';

const setCurrentOrderAction = (
  currentOrder: Order | null
): SetCurrentOrderAction => ({
  type: CurrentOrderActionTypes.SET_CURRENT_ORDER,
  currentOrder
});

const setCurrentOrderStatusAction = (
  status: boolean | null
): SetCurrentOrderStatusAction => ({
  type: CurrentOrderActionTypes.SET_CURRENT_ORDER_STATUS,
  status
});

export const setCurrentOrder =
  (order: Order) => async (dispatch: Dispatch<any>) => {
    dispatch(setCurrentOrderAction(order));
  };

export const clearCurrentOrder = () => async (dispatch: Dispatch<any>) => {
  dispatch(setCurrentOrderAction(null));
  dispatch(setCurrentOrderStatusAction(null));
};

export const changeOrder =
  () => async (dispatch: Dispatch<any>, getState: () => AppState) => {
    dispatch(loadingStart(CHANGE_ORDER_LOADING));
    try {
      const { currentOrder } = getState().currentOrder;
      if (currentOrder) {
        const { order } = await changeOrderReq(currentOrder);
        const orders = getState().orders.orders.filter(
          ({ id }) => id !== currentOrder.id
        );
        dispatch(setOrdersAction([order, ...orders]));
        dispatch(loadingStop(CHANGE_ORDER_LOADING));

        dispatch(setCurrentOrderStatusAction(true));
        dispatch(alertShow(CHANGE_ORDER_LOADING_SUCCESS, 'success'));
      } else {
        throw new Error('No current order error');
      }
    } catch (changeOrderError) {
      dispatch(loadingStop(CHANGE_ORDER_LOADING));

      dispatch(setCurrentOrderStatusAction(false));
      dispatch(alertShow(CHANGE_ORDER_LOADING_FAILED, 'error'));
      throw changeOrderError;
    }
  };

export const deleteOrder =
  () => async (dispatch: Dispatch<any>, getState: () => AppState) => {
    dispatch(loadingStart(DELETE_ORDER_LOADING));
    try {
      const { currentOrder } = getState().currentOrder;
      if (currentOrder) {
        await deleteOrderReq(currentOrder);
        const orders = getState().orders.orders.filter(
          ({ id }) => id !== currentOrder.id
        );

        dispatch(setOrdersAction(orders));
        dispatch(loadingStop(DELETE_ORDER_LOADING));

        dispatch(setCurrentOrderStatusAction(true));
        dispatch(alertShow(DELETE_ORDER_LOADING_SUCCESS, 'success'));
      } else {
        throw new Error('No current order error');
      }
    } catch (deleteOrderError) {
      dispatch(loadingStop(DELETE_ORDER_LOADING));

      dispatch(setCurrentOrderStatusAction(false));
      dispatch(alertShow(DELETE_ORDER_LOADING_FAILED, 'error'));
      throw deleteOrderError;
    }
  };
