import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';
import { selectCars } from '@store/selectors';

import CarCard from '@components/car-card';
import CarOptions from '@components/car-settings';

import './car-edit.scss';
import { Container } from '@components/wrapper';

export const CarEdit: FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { cars } = useAppSelector(selectCars);
  const car = useMemo(
    () => cars.find(({ id: carId }) => carId === id),
    [id, cars]
  );

  return (
    <Container title='Карточка автомобиля' className='car-edit'>
      <div className='car-edit__wrapper'>
        <CarCard car={car} />
        <CarOptions car={car} />
      </div>
    </Container>
  );
};
