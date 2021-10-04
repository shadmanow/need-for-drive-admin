import React, { FC, useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import plusIcon from '@assets/images/plus.png';

import { ROUTES } from '@constants/routes';

import { useAppSelector } from '@store/hooks';
import {
  selectCategories,
  selectCurrentCar,
  selectCurrentCarStatus
} from '@store/selectors';
import {
  addCar,
  changeCar,
  clearCurrentCar,
  deleteCar,
  setCurrentCar
} from '@store/current-car/thunks';
import { Car } from '@store/cars/types';

import { Panel } from '@components/wrapper';
import TextField from '@components/common/text-field';
import Select from '@components/common/select';
import Button from '@components/common/button';
import Checkbox from '@components/common/checkbox';

import './car-form.scss';
import { CarCard } from '../car-card/car-card';

export const CarForm: FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const categories = useAppSelector(selectCategories);
  const currentCar = useAppSelector(selectCurrentCar);
  const currentCarStatus = useAppSelector(selectCurrentCarStatus);

  const [color, setColor] = useState('');
  const [colors, setColors] = useState(currentCar?.colors || []);

  const categoryOptions = useMemo(
    () => categories.map((category) => category.name),
    [categories]
  );

  const isButtonApplyDisabled = useMemo(
    () =>
      !(currentCar?.imgFile || currentCar?.thumbnail) ||
      !currentCar?.priceMax ||
      !currentCar?.priceMin ||
      !currentCar.name ||
      !currentCar.tank ||
      !currentCar.number ||
      !currentCar.description,
    [currentCar]
  );

  useEffect(() => {
    if (currentCarStatus) {
      history.push(ROUTES.CARS);
    }
  }, [currentCarStatus]);

  useEffect(
    () => () => {
      dispatch(clearCurrentCar());
    },
    []
  );

  const handleChange = (change: { name: string; value: string }) => {
    dispatch(
      setCurrentCar({ ...currentCar, [change.name]: change.value } as Car)
    );
  };

  const handleCategorySelect = (select: { value: string }) => {
    const categoryId = categories.find(({ name }) => name === select.value);
    if (categoryId) {
      dispatch(setCurrentCar({ ...currentCar, categoryId } as Car));
    }
  };

  const handleColorChange = (change: { value: string }) => {
    setColor(change.value);
  };

  const handleAddColorClick = () => {
    const newColors = [color, ...colors];
    setColors(newColors);
    setColor('');
    dispatch(setCurrentCar({ ...currentCar, colors: newColors } as Car));
  };

  const handleDeleteColorClick = (index: number) => {
    const newColors = [...colors.slice(0, index), ...colors.slice(index + 1)];
    setColors(newColors);
    dispatch(setCurrentCar({ ...currentCar, colors: newColors } as Car));
  };

  const handleApply = () => {
    if (currentCar?.id) {
      dispatch(changeCar());
    } else {
      dispatch(addCar());
    }
  };

  const handleCancel = () => history.push(ROUTES.CARS);

  const handleDelete = () => {
    dispatch(deleteCar());
  };

  return (
    <div className='car-form'>
      <CarCard />
      <Panel title='Настройки автомобиля' className='car-form__settings'>
        <TextField
          name='name'
          label='Модель автомобиля'
          value={currentCar?.name || ''}
          error={!currentCar?.name.length}
          onChange={handleChange}
        />
        <Select
          label='Категория'
          value={currentCar?.categoryId?.name || categories[0].name}
          options={categoryOptions}
          onSelect={handleCategorySelect}
        />
        <TextField
          name='tank'
          label='Топливо'
          value={currentCar?.tank || ''}
          error={!currentCar?.tank || currentCar.tank > 100}
          onChange={handleChange}
        />
        <TextField
          name='number'
          label='Номер'
          value={currentCar?.number || ''}
          error={!currentCar?.number}
          onChange={handleChange}
        />

        <div className='car-form__color'>
          <TextField
            value={color}
            label='Доступные цвета'
            onChange={handleColorChange}
          />
          <Button
            icon={plusIcon}
            color='light'
            variant='outlined'
            onClick={handleAddColorClick}
          />

          <div className='car-form__color-list'>
            {colors.map((value, index) => (
              <Checkbox
                key={`${currentCar?.name}-${value}`}
                checked
                label={value}
                onClick={() => handleDeleteColorClick(index)}
              />
            ))}
          </div>
        </div>

        <div className='car-form__price'>
          <TextField
            name='priceMin'
            label='Начальная цена'
            error={!currentCar?.priceMin}
            value={currentCar?.priceMin || ''}
            onChange={handleChange}
          />
          <TextField
            name='priceMax'
            label='Максимальная цена'
            error={!currentCar?.priceMax}
            value={currentCar?.priceMax || ''}
            onChange={handleChange}
          />
        </div>

        <div className='car-form__buttons'>
          <Button
            disabled={isButtonApplyDisabled}
            value={currentCar?.id ? 'Сохранить' : 'Добавить'}
            onClick={handleApply}
          />
          <Button value='Отменить' color='light' onClick={handleCancel} />
          {currentCar?.id && (
            <Button value='Удалить' color='danger' onClick={handleDelete} />
          )}
        </div>
      </Panel>
    </div>
  );
};
