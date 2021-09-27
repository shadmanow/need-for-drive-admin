import React, { FC } from 'react';

import plusIcon from '@assets/images/plus.png';
import { useAppSelector } from '@store/hooks';
import { selectCategories } from '@store/selectors';
import { Car } from '@store/car/types';

import TextField from '@components/common/text-field';
import Select from '@components/common/select';
import Button from '@components/common/button';
import Checkbox from '@components/common/checkbox';

import './car-settings.scss';
import { Panel } from '@components/wrapper';

export const CarOptions: FC<{ car: Car }> = ({ car }): JSX.Element => {
  const { categories } = useAppSelector(selectCategories);

  return (
    <Panel title='Настройки автомобиля' className='car-settings'>
      <div className='car-settings__items'>
        <TextField value={car.name} label='Модель автомобиля' />
        <Select
          label='Категория'
          defaultValue={car.categoryId?.name || 'Не указан'}
          values={categories.map((category) => category.name)}
        />
        <TextField value={car.tank} label='Топливо' />
        <TextField value={car.number} label='Номер' />
        <div className='car-settings__color-setting'>
          <TextField value='' label='Доступные цвета' />
          <Button icon={plusIcon} color='light' variant='outlined' />

          <div className='car-settings__colors'>
            {car?.colors.map((color) => (
              <Checkbox key={`${car.id}-${color}`} checked label={color} />
            ))}
          </div>
        </div>
      </div>

      <div className='car-settings__buttons'>
        <Button value='Сохранить' />
        <Button value='Отменить' color='light' />
        <Button value='Удалить' color='danger' />
      </div>
    </Panel>
  );
};
