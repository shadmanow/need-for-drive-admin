import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';
import { selectOrders } from '@store/selectors';
import { Order } from '@store/orders/types';

import { Container } from '@components/wrapper';
import OrderSettings from '@components/orders/order-form';

export const OrderAction: FC = (): JSX.Element => {
  const { id } = useParams<{ id: string | undefined }>();
  const orders = useAppSelector(selectOrders);
  const order = useMemo<Order | undefined>(
    () => orders.find(({ id: orderId }) => orderId === id),
    [id, orders]
  );

  return (
    <Container title='Редактирование заказа' className='order-action'>
      {order && <OrderSettings order={order} />}
    </Container>
  );
};
