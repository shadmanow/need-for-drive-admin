import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { LINKS } from '@constants/links';

import { useAppSelector } from '@store/hooks';
import { selectCars, selectFilter } from '@store/selectors';
import { Car } from '@store/cars/types';

import { Container, Panel } from '@components/wrapper';
import { CarList, CarFilters, FILTER_CARS } from '@components/cars';
import Button from '@components/common/button';

import './cars.scss';

export const Cars: FC = (): JSX.Element => {
  const history = useHistory();
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

  const handleClick = () => {
    history.push(`${LINKS.CARS.to}/new`);
  };

  return (
    <Container title='Автомобили' className='cars'>
      <Button value='Добавить' onClick={handleClick} />
      <Panel>
        <CarFilters />
        <CarList cars={filteredCars} />
      </Panel>
    </Container>
  );
};
