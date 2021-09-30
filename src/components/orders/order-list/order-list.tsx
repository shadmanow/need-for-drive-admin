import React, { FC, useState } from 'react';

import { Order } from '@store/orders/types';

import Paginator from '@components/paginator';
import { OrderItem } from '@components/orders';

import './order-list.scss';

export const OrderList: FC<{ orders: Order[] }> = ({ orders }) => {
  const [slicedOrders, setSlicedOrders] = useState<Order[]>([]);
  return (
    <div className='order-list'>
      <div className='order-list__wrapper'>
        {slicedOrders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
      {!!orders.length && (
        <Paginator elements={orders} onSelect={setSlicedOrders} />
      )}
    </div>
  );
};
