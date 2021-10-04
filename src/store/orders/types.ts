import { Car } from '@store/cars/types';
import { City } from '@store/cities/types';
import { Point } from '@store/points/types';

export const ORDERS_LOADING = 'Загрузка заказов...';
export const ORDERS_LOADING_FAILED = 'Не удалось загрузить заказы';

export interface Order {
  createdAt: number;
  orderStatusId: OrderStatusId;
  cityId: City;
  pointId: Point;
  carId: Car;
  color: string;
  dateTo: number;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  rateId: {
    price: number;
    rateTypeId: {
      name: string;
      unit: string;
      id: string;
    };
    id: string;
  };
  dateFrom: number;
  id: string;
}

export interface OrderStatusId {
  name: string;
  id: string;
}

export interface OrdersState {
  readonly orders: Order[];
}

export enum OrdersActionTypes {
  SET_ORDERS = 'SET_ORDERS'
}

export interface SetOrdersAction {
  type: OrdersActionTypes.SET_ORDERS;
  orders: Order[];
}
