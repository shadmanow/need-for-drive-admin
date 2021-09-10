import React, { FC, useState, useEffect } from 'react';

import './order.scss';
import { selectOrders, selectFilter } from '@store/selectors';
import { useAppSelector } from '@store/hooks';
import OrderList from '@components/order-list';
import OrderFilters, { FILTER_ORDERS } from '@components/order-filters';

export const Order: FC = (): JSX.Element => {
  const { orders } = useAppSelector(selectOrders);
  const { filter } = useAppSelector(selectFilter);
  const [filteredOrders, setFilteredOrders] = useState<any[]>([]);

  useEffect(() => {
    if (orders.length) {
      setFilteredOrders(orders);
    }
  }, [orders]);

  useEffect(() => {
    const { type, predicate } = filter;
    if (type === FILTER_ORDERS) {
      setFilteredOrders(orders.filter(predicate));
    }
  }, [filter, orders]);

  return (
    <div className='order'>
      <h2 className='order__title'>Заказы</h2>
      <div className='order__wrapper'>
        <OrderFilters />
        <OrderList orders={filteredOrders} />
      </div>
    </div>
  );
};
