import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Car } from '@store/cars/types';
import { setFilter } from '@store/filter/thunks';

import TextField from '@components/common/text-field';
import Button from '@components/common/button';

import './car-filters.scss';
import { FILTER_CARS } from './constants';

export const CarFilters: FC = () => {
  const dispatch = useDispatch();
  const [carName, setCarName] = useState<string>('');

  const handleConfirm = () => {
    dispatch(setFilter(FILTER_CARS, (car: Car) => car.name.includes(carName)));
  };

  const handleClear = () => {
    setCarName('');
    dispatch(setFilter(FILTER_CARS, () => true));
  };

  return (
    <div className='car-filters'>
      <TextField
        value={carName}
        placeholder='Введите модель...'
        onChange={setCarName}
      />
      <Button value='Сбросить' color='danger' onClick={handleClear} />
      <Button value='Применить' onClick={handleConfirm} />
    </div>
  );
};
