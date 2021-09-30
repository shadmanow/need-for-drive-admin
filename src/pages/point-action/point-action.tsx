import React, { FC, useMemo } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';
import { selectPoints } from '@store/selectors';
import { Point } from '@store/points/types';

import { Container } from '@components/wrapper';
import PointForm from '@components/points/point-form';

import './point-action.scss';

export const PointAction: FC<RouteComponentProps> = ({
  location
}): JSX.Element => {
  const { id } = useParams<{ id: string | undefined }>();
  const points = useAppSelector(selectPoints);
  const title = useMemo(
    () =>
      location.pathname.includes('edit')
        ? 'Редактирование пункта выдачи'
        : 'Добавить пункт выдачи',
    [location]
  );
  const point = useMemo<Point>(
    () => points.find(({ id: pointId }) => pointId === id) || ({} as Point),
    [id, points]
  );
  return (
    <Container title={title} className='point-action'>
      <PointForm point={point} />
    </Container>
  );
};
