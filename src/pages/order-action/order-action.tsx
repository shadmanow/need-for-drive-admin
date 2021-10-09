import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@store/hooks';
import { setCurrentOrder } from '@store/current-order/thunks';
import { selectCurrentOrder, selectOrders } from '@store/selectors';
import { Order } from '@store/orders/types';

import { Container } from '@components/wrapper';
import OrderForm from '@components/orders/order-form';

export const OrderAction: FC = () => {
  const { id } = useParams<{ id: string | undefined }>();

  const dispatch = useDispatch();
  const orders = useAppSelector(selectOrders);
  const currentOrder = useAppSelector(selectCurrentOrder);

  useEffect(() => {
    if (id) {
      const order = orders.find(({ id: orderId }) => orderId === id);
      if (order) {
        dispatch(setCurrentOrder({ ...order } as Order));
      }
    }
  }, []);

  return (
    <Container title='Редактирование заказа' className='order-action'>
      {currentOrder && <OrderForm />}
    </Container>
  );
};
