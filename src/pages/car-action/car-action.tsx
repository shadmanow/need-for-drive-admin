import React, { FC, useMemo } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';
import { selectCars } from '@store/selectors';
import { Car } from '@store/cars/types';

import { Container } from '@components/wrapper';
import { CarForm } from '@components/cars';

import { DEFAULT_CAR } from './constants';

export const CarAction: FC<RouteComponentProps> = ({
  location
}): JSX.Element => {
  const { id } = useParams<{ id: string | undefined }>();
  const title = useMemo(
    () =>
      location.pathname.includes('edit')
        ? 'Редактирование автомобиля'
        : 'Добавить автомобиль',
    [location]
  );
  const cars = useAppSelector(selectCars);
  const car = useMemo<Car>(
    () =>
      cars.find(({ id: carId }) => carId === id) || ({ ...DEFAULT_CAR } as Car),
    [id, cars]
  );

  return (
    <Container title={title} className='car-action'>
      <CarForm car={car} />
    </Container>
  );
};
