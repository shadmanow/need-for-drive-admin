import React, { FC, useMemo, useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@store/hooks';
import { setCurrentPoint } from '@store/current-point/thunks';
import {
  selectPoints,
  selectCities,
  selectCurrentPoint
} from '@store/selectors';

import { Container } from '@components/wrapper';
import PointForm from '@components/points/point-form';

export const PointAction: FC<RouteComponentProps> = ({ location }) => {
  const { id } = useParams<{ id: string | undefined }>();

  const dispatch = useDispatch();
  const points = useAppSelector(selectPoints);
  const cities = useAppSelector(selectCities);
  const currentPoint = useAppSelector(selectCurrentPoint);

  const title = useMemo(
    () =>
      location.pathname.includes('edit')
        ? 'Редактирование пункта выдачи'
        : 'Добавить пункт выдачи',
    [location]
  );

  useEffect(() => {
    let point;
    if (id) {
      point = points.find(({ id: pointId }) => pointId === id);
    }
    if (point) {
      dispatch(setCurrentPoint({ ...point }));
    } else {
      dispatch(setCurrentPoint({ cityId: cities[0], address: '', name: '' }));
    }
  }, []);

  return (
    <Container title={title} className='point-action'>
      {currentPoint && <PointForm />}
    </Container>
  );
};
