import React, { FC, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { getEntries } from '@utils';

import { Order } from '@store/orders/types';
import { setFilter } from '@store/filter/thunks';
import { selectCars, selectCities } from '@store/selectors';
import { useAppSelector } from '@store/hooks';

import Select from '@components/common/select';
import Button from '@components/common/button';

import './order-filters.scss';
import { FILTER_ORDERS, STATUSES, TIMES } from './constants';
import {
  carPredicate,
  cityPredicate,
  statusPredicate,
  timePredicate
} from './helpers';

export const OrderFilters: FC = () => {
  const dispatch = useDispatch();
  const cities = useAppSelector(selectCities);
  const cars = useAppSelector(selectCars);

  const carOptions = useMemo(
    () => ['Выбрать модель', ...new Set(cars.map((car) => car.name))],
    [cars]
  );
  const cityOptions = useMemo(
    () => ['Выбрать Город', ...cities.map((city) => city.name)],
    [cities]
  );
  const [options, setOptions] = useState({
    car: carOptions[0],
    city: cityOptions[0],
    time: TIMES.ALL,
    status: STATUSES.ALL
  });

  const handleSelect = (values: { name: string; value: string }) =>
    setOptions({ ...options, [values.name]: values.value });

  const handleConfirm = () => {
    dispatch(
      setFilter(
        FILTER_ORDERS,
        (order: Order) =>
          carPredicate(options.car, order, carOptions[0]) &&
          cityPredicate(options.city, order, cityOptions[0]) &&
          timePredicate(options.time, order) &&
          statusPredicate(options.status, order)
      )
    );
  };

  const handleClear = () => {
    setOptions({
      car: carOptions[0],
      city: cityOptions[0],
      time: TIMES.ALL,
      status: STATUSES.ALL
    });
    dispatch(setFilter(FILTER_ORDERS, () => true));
  };

  return (
    <div className='order-filters'>
      <Select
        value={options.time}
        options={getEntries(TIMES).map(([, time]) => time)}
        name='time'
        onSelect={handleSelect}
      />
      <Select
        value={options.car}
        options={carOptions}
        name='car'
        onSelect={handleSelect}
      />
      <Select
        value={options.city}
        options={cityOptions}
        name='city'
        onSelect={handleSelect}
      />
      <Select
        value={options.status}
        options={getEntries(STATUSES).map(([, status]) => status)}
        name='status'
        onSelect={handleSelect}
      />
      <Button value='Сбросить' color='danger' onClick={handleClear} />
      <Button value='Применить' onClick={handleConfirm} />
    </div>
  );
};
