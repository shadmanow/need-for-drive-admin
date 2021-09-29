import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { LINKS } from '@constants/links';
import { Point } from '@store/points/types';

import Table from '@components/table';
import Paginator from '@components/paginator';

import './point-list.scss';

export const PointList: FC<{ points: Point[] }> = ({ points }) => {
  const history = useHistory();

  const [slicedPoints, setSlicedPoints] = useState<Point[]>([]);

  const handleClick = (rowIndex: number) =>
    history.push(`${LINKS.POINTS.to}/edit/${points[rowIndex].id}`);

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
        <div className='car-list__wrapper'>
          <Paginator elements={points} onSelect={setSlicedPoints} />
        </div>
      )}
    </div>
  );
};
