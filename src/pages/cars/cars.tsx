import React, { FC, useState, useEffect } from 'react';

import { useAppSelector } from '@store/hooks';
import { selectCars, selectFilter } from '@store/selectors';
import { Car } from '@store/car/types';

import { Container, Panel } from '@components/wrapper';
import { CarList } from '@components/car-list/car-list';
import { CarFilters } from '@components/car-filters/car-filters';
import { FILTER_CARS } from '@components/car-filters/constants';

import './cars.scss';

export const Cars: FC = (): JSX.Element => {
  const { cars } = useAppSelector(selectCars);
  const { filter } = useAppSelector(selectFilter);
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
    <Container title='Автомобили' className='car'>
      <Panel>
        <CarFilters />
        <CarList cars={filteredCars} />
      </Panel>
    </Container>
  );
};
