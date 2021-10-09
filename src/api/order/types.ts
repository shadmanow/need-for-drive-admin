import { Order } from '@store/orders/types';

export interface GerOrdersResponse {
  data: {
    data: Order[];
  };
}

export interface GetOrdersData {
  orders: Order[];
}

export interface ChangeOrderResponse {
  data: {
    data: Order;
  };
}

export interface ChangeOrderData {
  order: Order;
}
