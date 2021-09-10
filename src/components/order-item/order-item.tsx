import React, { FC } from 'react';
import { getEntries, toDateString, toRubFormat } from '@utils';

import noImage from '@assets/images/no-image.png';
import { Order } from '@store/order/types';
import { OrderStatusIds } from '@store/constants';

import './order-item.scss';
import Checkbox from '@components/common/checkbox';
import Button from '@components/common/button';
import { SERVICES } from './constants';

export const OrderItem: FC<{ order: Order }> = ({ order }) => (
  <div className='order-item'>
    <img
      className='order-item__image'
      src={order.carId ? order.carId.thumbnail.path : noImage}
      alt={order.carId?.name}
    />
    <div className='order-item__description'>
      <span>
        Статус:{' '}
        {order.orderStatusId.id === OrderStatusIds.NEW.id && (
          <strong>{OrderStatusIds.NEW.name}</strong>
        )}
        {order.orderStatusId.id === OrderStatusIds.CANCELED.id && (
          <strong>{OrderStatusIds.CANCELED.name}</strong>
        )}
        {order.orderStatusId.id === OrderStatusIds.CONFIRMED.id && (
          <strong>{OrderStatusIds.CONFIRMED.name}</strong>
        )}
        {order.orderStatusId.id === OrderStatusIds.TEMPRORARY.id && (
          <strong>{OrderStatusIds.TEMPRORARY.name}</strong>
        )}
      </span>
      <span>
        <strong>{order.carId ? order.carId.name : 'Модель не указана'}</strong>
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
    <Button value='Изменить' onClick={() => {}} variant='outlined' />
  </div>
);
