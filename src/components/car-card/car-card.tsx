import React, { FC, useState, useEffect } from 'react';

import noImage from '@assets/images/no-image.png';

import { Car } from '@store/car/types';

import { Panel } from '@components/wrapper';
import FileChooser from '@components/file-chooser';
import ProgressBar from '@components/progress-bar';

import './car-card.scss';

export const CarCard: FC<{ car: Car }> = ({ car }): JSX.Element => {
  useEffect(() => {}, []);

  return (
    <Panel className='car-card'>
      <img
        className='car-card__image'
        src={car.thumbnail?.path || noImage}
        alt={car.name}
      />
      <span className='car-card__name'>{car.name}</span>
      {car.categoryId && (
        <span className='car-card__category'>{car.categoryId?.name}</span>
      )}
      <FileChooser />
      <ProgressBar progress={car.tank} />
      <div className='car-card__description'>
        <h2>Описание</h2>
        <p>{car.description || 'Нет описания'}</p>
      </div>
    </Panel>
  );
};
