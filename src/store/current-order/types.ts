import { Order } from '@store/orders/types';

export const CHANGE_ORDER_LOADING = 'Изменение заказа...';
export const CHANGE_ORDER_LOADING_FAILED = 'Не удалось изменить заказ';
export const CHANGE_ORDER_LOADING_SUCCESS = 'Заказ успешно изменен!';

export const DELETE_ORDER_LOADING = 'Удаление заказа...';
export const DELETE_ORDER_LOADING_FAILED = 'Не удалось удалить заказ';
export const DELETE_ORDER_LOADING_SUCCESS = 'Заказ успешно удален!';

export interface CurrentOrderState {
  readonly status: boolean | null;
  readonly currentOrder: Order | null;
}

export enum CurrentOrderActionTypes {
  SET_CURRENT_ORDER = 'SET_CURRENT_ORDER',
  SET_CURRENT_ORDER_STATUS = 'SET_CURRENT_ORDER_STATUS'
}

export interface SetCurrentOrderAction {
  type: CurrentOrderActionTypes.SET_CURRENT_ORDER;
  currentOrder: Order | null;
}

export interface SetCurrentOrderStatusAction {
  type: CurrentOrderActionTypes.SET_CURRENT_ORDER_STATUS;
  status: boolean | null;
}

export type CurrentOrderAction =
  | SetCurrentOrderAction
  | SetCurrentOrderStatusAction;
