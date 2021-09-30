import baseApi from '../base';
import { FetchOrdersResponse, FetchOrdersData } from './types';

export const fetchOrders = async (): Promise<FetchOrdersData> => {
  const response: FetchOrdersResponse = await baseApi.get(
    '/api/db/order?limit=10'
  );
  return {
    orders: response.data.data.map((order) => {
      const { carId } = order;
      if (carId?.thumbnail.path.startsWith('/files')) {
        carId.thumbnail.path = `${process.env.REACT_APP_API_URL}/${carId.thumbnail.path}`;
      }
      return order;
    })
  };
};
