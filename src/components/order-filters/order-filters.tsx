import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getEntries } from '@utils';

import { Order } from '@store/order/types';
import { setFilter } from '@store/filter/thunks';
import { selectCars, selectCities } from '@store/selectors';
import { useAppSelector } from '@store/hooks';
import { OrderStatusIds } from '@store/constants';

import './order-filters.scss';
import Select from '@components/common/select';
import Button from '@components/common/button';
import { FILTER_ORDERS } from './constants';

export const OrderFilters: FC = (): JSX.Element => {
  const { cities } = useAppSelector(selectCities);
  const { cars } = useAppSelector(selectCars);

  const CARS = ['Выбрать модель', ...new Set(cars.map((car) => car.name))];
  const CITIES = ['Выбрать Город', ...cities.map((city) => city.name)];

  const TIMES = {
    ALL: 'За все время',
    MONTH: 'За месяц',
    WEEK: 'За неделю'
  };

  const STATUSES = {
    ALL: 'Выбрать статус',
    NEW: OrderStatusIds.NEW.name,
    CONFIRMED: OrderStatusIds.CONFIRMED.name,
    CANCELED: OrderStatusIds.CANCELED.name,
    TEMPRORARY: OrderStatusIds.TEMPRORARY.name
  };

  const dispatch = useDispatch();
  const [selects, setSelects] = useState({
    car: CARS[0],
    time: TIMES.ALL,
    city: CITIES[0],
    status: STATUSES.ALL
  });

  const carPredicate = (value: string, order: Order) =>
    value === CARS[0] ? true : order.carId?.name === value;

  const cityPredicate = (value: string, order: Order) =>
    value === CITIES[0] ? true : order.cityId?.name === value;

  const statusPredicate = (value: string, order: Order) =>
    value === STATUSES.ALL ? true : order.orderStatusId.name === value;

  const timePredicate = (value: string, order: Order) => {
    const date = new Date();
    if (value === TIMES.MONTH) {
      return order.createdAt >= date.setMonth(date.getMonth() - 1);
    }
    if (value === TIMES.WEEK) {
      return order.createdAt >= date.setDate(date.getDate() - 7);
    }
    return true;
  };

  const handleConfirm = () => {
    dispatch(
      setFilter(
        FILTER_ORDERS,
        (order: Order) =>
          carPredicate(selects.car, order) &&
          cityPredicate(selects.city, order) &&
          timePredicate(selects.time, order) &&
          statusPredicate(selects.status, order)
      )
    );
  };

  return (
    <div className='order-filters'>
      <Select
        defaultValue={selects.time}
        values={getEntries(TIMES).map(([, time]) => time)}
        onSelect={(time: string) => setSelects({ ...selects, time })}
      />
      <Select
        defaultValue={selects.car}
        values={CARS}
        onSelect={(car: string) => setSelects({ ...selects, car })}
      />
      <Select
        defaultValue={selects.city}
        values={CITIES}
        onSelect={(city: string) => setSelects({ ...selects, city })}
      />
      <Select
        defaultValue={selects.status}
        values={getEntries(STATUSES).map(([, status]) => status)}
        onSelect={(status: string) => setSelects({ ...selects, status })}
      />
      <Button value='Применить' onClick={handleConfirm} />
    </div>
  );
};
