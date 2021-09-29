import React, { FC, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import editIcon from '@assets/images/svg/edit.svg';
import noImage from '@assets/images/no-image.png';

import { LINKS } from '@constants/links';
import { getEntries, toDateString, toRubFormat } from '@utils';
import { Order } from '@store/orders/types';
import { OrderStatusIds } from '@store/constants';

import Checkbox from '@components/common/checkbox';
import Button from '@components/common/button';

import './order-item.scss';
import { SERVICES } from './constants';

export const OrderItem: FC<{ order: Order }> = ({ order }) => {
  const history = useHistory();

  const orderStatus = useMemo(() => {
    const statusEntry = getEntries(OrderStatusIds).find(
      ([, orderStatusId]) => orderStatusId.id === order.orderStatusId?.id
    );
    return <strong>{statusEntry ? statusEntry[1].name : 'Не указан'}</strong>;
  }, [order]);

  const handleClick = () => {
    history.push(`${LINKS.ORDERS.to}/edit/${order.id}`);
  };

  return (
    <div className='order-item'>
      <img
        className='order-item__image'
        src={order.carId?.thumbnail?.path || noImage}
        alt={order.carId?.name}
      />
      <div className='order-item__description'>
        <span>Статус: {orderStatus}</span>
        <span>
          <strong>{order.carId?.name || 'Модель не указана'}</strong>
        </span>
        <span>
          Цвет: <strong>{order.color}</strong>
        </span>
        <span>
          <strong>
            {order.cityId && order.pointId
              ? `${order.cityId.name}, в ${order.pointId.address}`
              : 'Пункт не указан'}
          </strong>
        </span>
        <span>
          <strong>
            {toDateString(order.dateFrom)} — {toDateString(order.dateTo)}
          </strong>
        </span>
      </div>
      <div className='order-item__description'>
        {getEntries<typeof SERVICES>(SERVICES).map(([key, value]) => (
          <Checkbox
            key={`${order.id}-${value}`}
            checked={order[key] as boolean}
            label={value}
            disabled
          />
        ))}
      </div>
      <div className='order-item__price'>
        <span>{toRubFormat(order.price)}</span>
      </div>
      <Button
        className='order-item__button'
        value='Изменить'
        variant='outlined'
        color='light'
        icon={editIcon}
        onClick={handleClick}
      />
    </div>
  );
};
