import React, { FC, useState } from 'react';

import { getEntries } from '@utils';
import { useAppSelector } from '@store/hooks';
import { Order } from '@store/orders/types';
import { Car } from '@store/cars/types';
import { selectCars, selectCities, selectPoints } from '@store/selectors';

import TextField from '@components/common/text-field';
import { Panel } from '@components/wrapper';
import Button from '@components/common/button';
import Checkbox from '@components/common/checkbox';
import Select from '@components/common/select';
import { CarCard } from '@components/cars';

import './order-settings.scss';
import { SERVICES } from '../order-item/constants';

export const OrderSettings: FC<{ order: Order }> = ({ order }): JSX.Element => {
  const cities = useAppSelector(selectCities);
  const points = useAppSelector(selectPoints);
  const cars = useAppSelector(selectCars);

  const [initValues, setInitValues] = useState({
    car: {
      ...order.carId
    } as Car,
    city: {
      ...order.cityId
    },
    point: {
      ...order.pointId
    },
    price: order.price
  });

  return (
    <div className='order-settings'>
      <Panel title='Автомобиль' className='order-settings__car'>
        <Select
          value={initValues.car?.name || 'Не указано'}
          options={[...new Set(cars.map(({ name }) => name))]}
        />
        {initValues.car && <CarCard car={initValues.car} />}
      </Panel>

      <Panel title='Прочее' className='order-settings__other'>
        <Select
          label='Город'
          value={initValues.city.name}
          options={[...cities.map(({ name }) => name)]}
        />
        <Select
          label='Пункт'
          value={initValues.point.name}
          options={[...points.map(({ address }) => address)]}
        />
        <TextField label='Цена' value={order.price} />
        <div className='order-settings__services'>
          {getEntries(SERVICES).map(([key, value]) => (
            <Checkbox
              key={`${order.id}-${value}`}
              checked={order[key] as boolean}
              label={value}
            />
          ))}
        </div>
        <div className='order-settings__buttons'>
          <Button value='Сохранить' />
          <Button value='Отменить' color='light' />
          <Button value='Удалить' color='danger' />
        </div>
      </Panel>
    </div>
  );
};
