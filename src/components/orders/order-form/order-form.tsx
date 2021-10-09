import React, { FC, useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import noImage from '@assets/images/no-image.png';
import { ROUTES } from '@constants/routes';
import { getEntries } from '@utils';

import { OrderStatusIds } from '@store/constants';
import { useAppSelector } from '@store/hooks';
import {
  deleteOrder,
  setCurrentOrder,
  changeOrder,
  clearCurrentOrder
} from '@store/current-order/thunks';
import { Order } from '@store/orders/types';
import {
  selectCars,
  selectCities,
  selectCurrentOrder,
  selectCurrentOrderStatus,
  selectPoints
} from '@store/selectors';

import TextField from '@components/common/text-field';
import { Panel } from '@components/wrapper';
import Button from '@components/common/button';
import Checkbox from '@components/common/checkbox';
import Select from '@components/common/select';

import './order-form.scss';
import { SERVICES } from '../order-item/constants';

export const OrderForm: FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const cars = useAppSelector(selectCars);
  const cities = useAppSelector(selectCities);
  const points = useAppSelector(selectPoints);
  const currentOrder = useAppSelector(selectCurrentOrder);
  const currentOrderStatus = useAppSelector(selectCurrentOrderStatus);

  const carsOptions = useMemo(
    () => ['Выбрать модель', ...new Set(cars.map(({ name }) => name))],
    [cars]
  );

  const cityOptions = useMemo(
    () => ['Выбрать город', ...cities.map(({ name }) => name)],
    [cities]
  );

  const statusOptions = useMemo(
    () => getEntries(OrderStatusIds).map(([, status]) => status.name),
    [OrderStatusIds]
  );

  const pointsOptions = useMemo(
    () => [
      'Выбрать пункт',
      ...points.reduce<string[]>((arr, point) => {
        if (point.cityId?.name === currentOrder?.cityId?.name) {
          arr.push(point.address);
        }
        return arr;
      }, [])
    ],
    [points, currentOrder?.cityId]
  );

  const isButtonApplyDisabled = useMemo(
    () =>
      !currentOrder?.orderStatusId ||
      !currentOrder?.cityId ||
      !currentOrder?.carId ||
      !currentOrder?.pointId ||
      !currentOrder.price,
    [currentOrder]
  );

  useEffect(() => {
    if (currentOrderStatus) {
      history.push(ROUTES.ORDERS);
    }
  }, [currentOrderStatus]);

  useEffect(
    () => () => {
      dispatch(clearCurrentOrder());
    },
    []
  );

  const handleCarSelect = (select: { value: string }) => {
    const carId = cars.find(({ name }) => name === select.value);
    if (carId) {
      dispatch(setCurrentOrder({ ...currentOrder, carId } as Order));
    }
  };

  const handleCitySelect = (select: { value: string }) => {
    const cityId = cities.find(({ name }) => name === select.value);
    if (cityId) {
      dispatch(setCurrentOrder({ ...currentOrder, cityId } as Order));
    }
  };

  const handlePointSelect = (select: { value: string }) => {
    const pointId = points.find(({ address }) => address === select.value);
    if (pointId) {
      dispatch(setCurrentOrder({ ...currentOrder, pointId } as Order));
    }
  };

  const handleServiceChange = (change: { name: string; value: boolean }) => {
    dispatch(
      setCurrentOrder({
        ...currentOrder,
        [change.name]: !change.value
      } as Order)
    );
  };

  const handlePriceChange = (change: { value: string }) => {
    dispatch(
      setCurrentOrder({
        ...currentOrder,
        price: change.value as any as number
      } as Order)
    );
  };

  const handleStatusSelect = (select: { value: string }) => {
    const statusId = getEntries(OrderStatusIds).find(
      ([, status]) => status.name === select.value
    );
    if (statusId) {
      dispatch(
        setCurrentOrder({
          ...currentOrder,
          orderStatusId: statusId[1]
        } as Order)
      );
    }
  };

  const handleApply = () => {
    dispatch(changeOrder());
  };

  const handleCancel = () => {
    history.push(ROUTES.ORDERS);
  };

  const handleDelete = () => {
    dispatch(deleteOrder());
  };

  return (
    <div className='order-form'>
      <Panel className='order-form__car'>
        <Select
          value={currentOrder?.carId?.name || 'Выбрать модель'}
          onSelect={handleCarSelect}
          options={carsOptions}
        />

        <div className='order-form__car-card'>
          <img
            className='order-form__car-image'
            src={currentOrder?.carId?.thumbnail?.path || noImage}
            alt='car-img'
          />
          <span className='order-form__car-name'>
            {currentOrder?.carId?.name || 'Модель не указана'}
          </span>
          <span className='order-form__car-category'>
            {currentOrder?.carId?.categoryId?.name}
          </span>
        </div>
      </Panel>

      <Panel title='Настройки заказа' className='order-form__settings'>
        <Select
          label='Статус'
          value={currentOrder?.orderStatusId.name || statusOptions[0]}
          options={statusOptions}
          onSelect={handleStatusSelect}
        />
        <Select
          label='Город'
          value={currentOrder?.cityId?.name || 'Выбрать город'}
          options={cityOptions}
          onSelect={handleCitySelect}
        />
        <Select
          label='Пункт'
          disabled={pointsOptions.length <= 1}
          value={currentOrder?.pointId?.address || 'Выбрать пункт'}
          options={pointsOptions}
          onSelect={handlePointSelect}
        />
        <TextField
          label='Цена'
          value={currentOrder?.price || ''}
          error={!currentOrder?.price || currentOrder.price < 0}
          onChange={handlePriceChange}
        />
        <div className='order-form__services'>
          {getEntries(SERVICES).map(([key, value]) => (
            <Checkbox
              name={key as string}
              key={`${currentOrder?.id}-${value}`}
              checked={
                (currentOrder && (currentOrder[key] as boolean)) || false
              }
              label={value}
              onClick={handleServiceChange}
            />
          ))}
        </div>
        <div className='order-form__buttons'>
          <Button
            value='Сохранить'
            onClick={handleApply}
            disabled={isButtonApplyDisabled}
          />
          <Button value='Отменить' color='light' onClick={handleCancel} />
          <Button value='Удалить' color='danger' onClick={handleDelete} />
        </div>
      </Panel>
    </div>
  );
};
