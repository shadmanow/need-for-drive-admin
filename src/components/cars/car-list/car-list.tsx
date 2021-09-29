import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { LINKS } from '@constants/links';

import noImage from '@assets/images/no-image.png';

import { Car } from '@store/cars/types';

import Table from '@components/table';
import Paginator from '@components/paginator';

import './car-list.scss';

export const CarList: FC<{ cars: Car[] }> = ({ cars }) => {
  const history = useHistory();

  const [slicedCars, setSlicedCars] = useState<Car[]>([]);

  const handleClick = (rowIndex: number) =>
    history.push(`${LINKS.CARS.to}/edit/${cars[rowIndex].id}`);

  return (
    <div className='car-list'>
      <Table
        redrawable
        elements={slicedCars.map((car) => ({
          id: car.id,
          Изображение: (
            <img
              className='car-list__image'
              src={car.thumbnail?.path || noImage}
              alt={car.name}
            />
          ),
          Модель: car.name,
          Номер: car.number,
          Стоимость: `${car.priceMin} - ${car.priceMax}₽`,
          Топливо: car.tank || 'Не указан',
          Категория: car.categoryId?.name || 'Не указан',
          Цвета: car.colors.map((color) => color).join(', ') || 'Нет цветов'
        }))}
        onClick={handleClick}
      />
      {!!cars.length && (
        <div className='car-list__wrapper'>
          <Paginator elements={cars} onSelect={setSlicedCars} />
        </div>
      )}
    </div>
  );
};
