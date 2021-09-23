import React, { FC, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { getEntries } from '@utils';

import { Order } from '@store/order/types';
import { setFilter } from '@store/filter/thunks';
import { selectCars, selectCities } from '@store/selectors';
import { useAppSelector } from '@store/hooks';

import Select from '@components/common/select';
import Button from '@components/common/button';

import './order-filters.scss';
import { FILTER_ORDERS, STATUSES, TIMES } from './constants';

export const OrderFilters: FC = (): JSX.Element => {
  const { cities } = useAppSelector(selectCities);
  const { cars } = useAppSelector(selectCars);

  const CARS = useMemo(
    () => ['Выбрать модель', ...new Set(cars.map((car) => car.name))],
    [cars]
  );
  const CITIES = useMemo(
    () => ['Выбрать Город', ...cities.map((city) => city.name)],
    [cities]
  );

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

  const handleSelectChange = (values: { name: string; value: string }) =>
    setSelects({ ...selects, [values.name]: values.value });

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
        name='time'
        onSelect={handleSelectChange}
      />
      <Select
        defaultValue={selects.car}
        values={CARS}
        name='car'
        onSelect={handleSelectChange}
      />
      <Select
        defaultValue={selects.city}
        values={CITIES}
        name='city'
        onSelect={handleSelectChange}
      />
      <Select
        defaultValue={selects.status}
        values={getEntries(STATUSES).map(([, status]) => status)}
        name='status'
        onSelect={handleSelectChange}
      />
      <Button value='Применить' onClick={handleConfirm} />
    </div>
  );
};
