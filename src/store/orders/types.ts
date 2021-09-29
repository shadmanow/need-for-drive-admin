export const ORDERS_LOADING = 'Загрузка заказов...';
export const ORDERS_LOADING_FAILED = 'Не удалось загрузить заказы';

export interface Order {
  createdAt: number;
  orderStatusId: {
    name: string;
    id: string;
  };
  cityId: {
    name: string;
    id: string;
  };
  pointId: {
    address: string;
    name: string;
    id: string;
  };
  carId: {
    name: string;
    description: string;
    categoryId: {
      name: string;
      description: string;
      id: string;
    };
    priceMax: number;
    priceMin: number;
    thumbnail: {
      path: string;
    };
    number: string;
    tank: number;
    colors: string[];
    id: string;
  };
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
