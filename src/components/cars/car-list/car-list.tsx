import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import noImage from '@assets/images/no-image.png';

import { ROUTES } from '@constants/routes';
import { Car } from '@store/cars/types';

import Table from '@components/table';
import Paginator from '@components/paginator';

import './car-list.scss';

export const CarList: FC<{ cars: Car[] }> = ({ cars }) => {
  const [slicedCars, setSlicedCars] = useState<Car[]>([]);
  const history = useHistory();

  const handleClick = (car: Car) => {
    history.push(`${ROUTES.CARS}/edit/${car.id}`);
  };

  return (
    <div className='car-list'>
      <Table
        redrawable
        onClick={handleClick}
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
      />
      {!!cars.length && <Paginator elements={cars} onSelect={setSlicedCars} />}
    </div>
  );
};
