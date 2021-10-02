import { Order } from '@store/order/types';

export interface FetchOrdersResponse {
  data: {
    data: Order[];
  };
}

export interface FetchOrdersData {
  orders: Order[];
}
