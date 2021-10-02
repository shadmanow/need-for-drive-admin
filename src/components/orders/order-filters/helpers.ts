import { Order } from '@store/orders/types';
import { STATUSES, TIMES } from './constants';

export const carPredicate = (
  value: string,
  order: Order,
  defaultValue: string
) => (value === defaultValue ? true : order.carId?.name === value);

export const cityPredicate = (
  value: string,
  order: Order,
  defaultValue: string
) => (value === defaultValue ? true : order.cityId?.name === value);

export const statusPredicate = (value: string, order: Order) =>
  value === STATUSES.ALL ? true : order.orderStatusId.name === value;

export const timePredicate = (value: string, order: Order) => {
  const date = new Date();

  if (value === TIMES.MONTH) {
    return order.createdAt >= date.setMonth(date.getMonth() - 1);
  }

  if (value === TIMES.WEEK) {
    return order.createdAt >= date.setDate(date.getDate() - 7);
  }

  return true;
};
