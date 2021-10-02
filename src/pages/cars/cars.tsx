import React, { FC, useState, useEffect } from 'react';

import { useAppSelector } from '@store/hooks';
import { selectCars, selectFilter } from '@store/selectors';
import { Car } from '@store/cars/types';

import { Container, Panel } from '@components/wrapper';
import { CarList, CarFilters, FILTER_CARS } from '@components/cars';

import './cars.scss';

export const Cars: FC = () => {
  const cars = useAppSelector(selectCars);
  const filter = useAppSelector(selectFilter);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);

  useEffect(() => {
    if (cars.length) {
      setFilteredCars(cars);
    }
  }, [cars]);

  useEffect(() => {
    const { type, predicate } = filter;
    if (type === FILTER_CARS) {
      setFilteredCars(cars.filter(predicate));
    }
  }, [filter, cars]);

  return (
    <Container title='Автомобили' className='cars'>
      <Panel className='cars__wrapper'>
        <CarFilters />
        <CarList cars={filteredCars} />
      </Panel>
    </Container>
  );
};
