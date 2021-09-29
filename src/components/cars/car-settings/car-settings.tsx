import React, { FC, useState } from 'react';

import plusIcon from '@assets/images/plus.png';
import { useAppSelector } from '@store/hooks';
import { selectCategories } from '@store/selectors';
import { Car } from '@store/cars/types';

import TextField from '@components/common/text-field';
import Select from '@components/common/select';
import Button from '@components/common/button';
import Checkbox from '@components/common/checkbox';

import './car-settings.scss';
import { Panel } from '@components/wrapper';

export const CarSettings: FC<{ car: Car }> = ({ car }): JSX.Element => {
  const categories = useAppSelector(selectCategories);
  const [initValues, setInitValues] = useState({
    id: car.id,
    name: car.name || 'Не указан',
    category: car.categoryId?.name || 'Не указан',
    tank: car.tank || 'Не указан',
    number: car.number || 'Не указан',
    colors: [...car.colors]
  });

  return (
    <Panel title='Настройки автомобиля' className='car-settings'>
      <TextField value={initValues.name} label='Модель автомобиля' />
      <Select
        label='Категория'
        value={initValues.category}
        options={categories.map((category) => category.name)}
      />
      <TextField value={initValues.tank} label='Топливо' />
      <TextField value={initValues.number} label='Номер' />

      <div className='car-settings__color'>
        <TextField value='' label='Доступные цвета' />
        <Button icon={plusIcon} color='light' variant='outlined' />

        <div className='car-settings__color-list'>
          {initValues.colors.map((color) => (
            <Checkbox key={`${initValues.id}-${color}`} checked label={color} />
          ))}
        </div>
      </div>

      <div className='car-settings__buttons'>
        <Button value={car.id ? 'Сохранить' : 'Добавить'} />
        <Button value='Отменить' color='light' />
        <Button value='Удалить' color='danger' />
      </div>
    </Panel>
  );
};
