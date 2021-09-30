import React, { FC, useState, useEffect } from 'react';

import { useAppSelector } from '@store/hooks';
import { selectPoints, selectFilter } from '@store/selectors';
import { Point } from '@store/points/types';

import { Container, Panel } from '@components/wrapper';
import { PointList, PointFilters, FILTER_POINTS } from '@components/points';

import './points.scss';

export const Points: FC = (): JSX.Element => {
  const points = useAppSelector(selectPoints);
  const filter = useAppSelector(selectFilter);
  const [filteredPoints, setFilteredPoints] = useState<Point[]>([]);

  useEffect(() => {
    if (points.length) {
      setFilteredPoints(points);
    }
  }, [points]);

  useEffect(() => {
    const { type, predicate } = filter;
    if (type === FILTER_POINTS) {
      setFilteredPoints(points.filter(predicate));
    }
  }, [filter, points]);

  return (
    <Container title='Пункты выдачи' className='points'>
      <Panel className='points__wrapper'>
        <PointFilters />
        <PointList points={filteredPoints} />
      </Panel>
    </Container>
  );
};
