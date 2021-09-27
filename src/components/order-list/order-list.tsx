import React, { FC, useState } from 'react';

import { Order } from '@store/order/types';

import Pagination from '@components/pagination';
import OrderItem from '@components/order-item';

import './order-list.scss';

export const OrderList: FC<{ orders: Order[] }> = ({ orders }) => {
  const [slicedOrders, setSlicedOrders] = useState<Order[]>([]);
  return (
    <div className='order-list'>
      {slicedOrders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
      <div className='order-list__wrapper'>
        <Pagination elements={orders} onSelect={setSlicedOrders} />
      </div>
    </div>
  );
};
