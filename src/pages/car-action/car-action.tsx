import React, { FC, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, useParams } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';
import {
  selectCars,
  selectCategories,
  selectCurrentCar
} from '@store/selectors';
import { setCurrentCar } from '@store/current-car/thunks';

import { Container } from '@components/wrapper';
import { CarForm } from '@components/cars';

export const CarAction: FC<RouteComponentProps> = ({ location }) => {
  const { id } = useParams<{ id: string | undefined }>();

  const dispatch = useDispatch();
  const cars = useAppSelector(selectCars);
  const categories = useAppSelector(selectCategories);
  const currentCar = useAppSelector(selectCurrentCar);

  const title = useMemo(
    () =>
      location.pathname.includes('edit')
        ? 'Редактирование автомобиля'
        : 'Добавить автомобиль',
    [location]
  );

  useEffect(() => {
    let car;
    if (id) {
      car = cars.find(({ id: carId }) => carId === id);
    }
    if (car) {
      dispatch(setCurrentCar({ ...car }));
    } else {
      dispatch(
        setCurrentCar({
          name: '',
          description: '',
          colors: [],
          categoryId: categories[0]
        })
      );
    }
  }, []);

  return (
    <Container title={title} className='car-action'>
      {currentCar && <CarForm />}
    </Container>
  );
};
