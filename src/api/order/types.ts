import { Order } from '@store/orders/types';

export interface FetchOrdersResponse {
  data: {
    data: Order[];
  };
}

export interface FetchOrdersData {
  orders: Order[];
}
