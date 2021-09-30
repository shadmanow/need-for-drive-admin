import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { Point } from '@store/points/types';

import Table from '@components/table';
import Paginator from '@components/paginator';

import './point-list.scss';

export const PointList: FC<{ points: Point[] }> = ({ points }) => {
  const [slicedPoints, setSlicedPoints] = useState<Point[]>([]);
  const history = useHistory();

  const handleClick = (rowIndex: number) => {
    history.push(`${ROUTES.POINTS}/edit/${points[rowIndex].id}`);
  };

  return (
    <div className='point-list'>
      <Table
        elements={slicedPoints.map((point: Point) => ({
          id: point.id,
          Адрес: point.address,
          Город: point.cityId?.name || 'Не указан'
        }))}
        onClick={handleClick}
      />
      {!!points.length && (
        <Paginator elements={points} onSelect={setSlicedPoints} slice={10} />
      )}
    </div>
  );
};
