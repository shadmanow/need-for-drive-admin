import React, { FC, useState } from 'react';

import { Order } from '@store/order/types';

import './order-list.scss';
import Pagination from '@components/pagination';
import OrderItem from '@components/order-item';
import { INITIAL_SLIZE } from './constants';

export const OrderList: FC<{ orders: Order[] }> = ({ orders }) => {
  const [curPage, setCurPage] = useState(1);
  return (
    <div className='order-list'>
      {orders
        .slice(
          INITIAL_SLIZE * (curPage - 1),
          INITIAL_SLIZE * (curPage - 1) + INITIAL_SLIZE
        )
        .map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      <div className='order-list__wrapper'>
        <Pagination
          currentPage={curPage}
          countPages={Math.ceil(orders.length / INITIAL_SLIZE)}
          onSelect={(page) => setCurPage(page)}
        />
      </div>
    </div>
  );
};
