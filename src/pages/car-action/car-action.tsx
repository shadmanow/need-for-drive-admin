import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';
import { selectCars } from '@store/selectors';

import { Container } from '@components/wrapper';
import { CarCard, CarSettings } from '@components/cars';

import './car-action.scss';
import { Car } from '@store/cars/types';
import { DEFAULT_CAR } from './constants';

export const CarAction: FC = (): JSX.Element => {
  const { id } = useParams<{ id: string | undefined }>();
  const cars = useAppSelector(selectCars);
  const car = useMemo<Car>(
    () =>
      cars.find(({ id: carId }) => carId === id) || ({ ...DEFAULT_CAR } as Car),
    [id, cars]
  );

  return (
    <Container title='Карточка автомобиля' className='car-action'>
      <CarCard car={car} />
      <CarSettings car={car} />
    </Container>
  );
};
