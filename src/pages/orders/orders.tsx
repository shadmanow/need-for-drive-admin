import React, { FC, useState, useEffect } from 'react';

import { Order } from '@store/orders/types';
import { selectOrders, selectFilter } from '@store/selectors';
import { useAppSelector } from '@store/hooks';

import { OrderList, OrderFilters, FILTER_ORDERS } from '@components/orders';
import { Container, Panel } from '@components/wrapper';

import './orders.scss';

export const Orders: FC = (): JSX.Element => {
  const orders = useAppSelector(selectOrders);
  const filter = useAppSelector(selectFilter);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);

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
    <Container title='Заказы' className='orders'>
      <Panel>
        <OrderFilters />
        <OrderList orders={filteredOrders} />
      </Panel>
    </Container>
  );
};
