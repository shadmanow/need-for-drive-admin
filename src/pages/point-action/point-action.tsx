import React, { FC, useMemo } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';

import { LINKS } from '@constants/links';

import { useAppSelector } from '@store/hooks';
import { selectPoints } from '@store/selectors';
import { Point } from '@store/points/types';

import { Container } from '@components/wrapper';
import PointSettings from '@components/points/point-settings';

import './point-action.scss';

export const PointAction: FC<RouteComponentProps> = ({
  location
}): JSX.Element => {
  const { id } = useParams<{ id: string | undefined }>();
  const points = useAppSelector(selectPoints);
  const isEdit = useMemo(
    () => location.pathname === `${LINKS.POINTS.to}/edit`,
    [location]
  );
  const point = useMemo<Point>(
    () => points.find(({ id: pointId }) => pointId === id) || ({} as Point),
    [id, points]
  );
  return (
    <Container
      title={isEdit ? 'Редактирование пункта выдачи' : 'Создание пункта выдачи'}
      className='point-action'
    >
      <PointSettings point={point} />
    </Container>
  );
};
