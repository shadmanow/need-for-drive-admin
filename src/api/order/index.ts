import { transformThumbnail } from '@api/car/helpers';
import { Order } from '@store/orders/types';
import baseApi from '../base';
import {
  ChangeOrderData,
  ChangeOrderResponse,
  GerOrdersResponse,
  GetOrdersData
} from './types';

export const getOrdersReq = async (): Promise<GetOrdersData> => {
  const response: GerOrdersResponse = await baseApi.get(
    '/api/db/order?limit=15'
  );
  return {
    orders: response.data.data.map((order) => {
      if (order.carId) {
        order.carId = transformThumbnail(order.carId);
      }
      return order;
    })
  };
};

export const changeOrderReq = async (
  order: Order
): Promise<ChangeOrderData> => {
  const response: ChangeOrderResponse = await baseApi.put(
    `/api/db/order/${order.id}`,
    {
      price: order.price,
      orderStatusId: order.orderStatusId,
      carId: order.carId.id,
      cityId: order.cityId.id,
      pointId: order.pointId.id,
      isRightWheel: order.isRightWheel,
      isNeedChildChair: order.isNeedChildChair,
      isFullTank: order.isFullTank
    }
  );
  if (response.data.data.carId) {
    response.data.data.carId = transformThumbnail(response.data.data.carId);
  }
  return {
    order: response.data.data
  };
};

export const deleteOrderReq = async (order: Order): Promise<void> => {
  await baseApi.delete(`/api/db/order/${order.id}`);
};
