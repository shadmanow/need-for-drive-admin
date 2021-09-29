import React, { FC, useState } from 'react';

import { Order } from '@store/orders/types';

import Paginator from '@components/paginator';
import { OrderItem } from '@components/orders';

import './order-list.scss';

export const OrderList: FC<{ orders: Order[] }> = ({ orders }) => {
  const [slicedOrders, setSlicedOrders] = useState<Order[]>([]);
  return (
    <div className='order-list'>
      {slicedOrders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
      {!!orders.length && (
        <div className='order-list__paginator-wrapper'>
          <Paginator elements={orders} onSelect={setSlicedOrders} />
        </div>
      )}
    </div>
  );
};
