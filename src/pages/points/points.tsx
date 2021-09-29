import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { LINKS } from '@constants/links';

import { useAppSelector } from '@store/hooks';
import { selectPoints, selectFilter } from '@store/selectors';
import { Point } from '@store/points/types';

import { Container, Panel } from '@components/wrapper';
import { PointList, PointFilters, FILTER_POINTS } from '@components/points';
import Button from '@components/common/button';

import './points.scss';

export const Points: FC = (): JSX.Element => {
  const history = useHistory();
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

  const handleClick = () => {
    history.push(`${LINKS.POINTS.to}/new`);
  };

  return (
    <Container title='Пункты выдачи' className='points'>
      <Button value='Добавить' onClick={handleClick} />
      <Panel>
        <PointFilters />
        <PointList points={filteredPoints} />
      </Panel>
    </Container>
  );
};
