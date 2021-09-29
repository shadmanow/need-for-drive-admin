import { OrderStatusIds } from '@store/constants';

export const FILTER_ORDERS = 'FILTER_ORDERS';

export const TIMES = {
  ALL: 'За все время',
  MONTH: 'За месяц',
  WEEK: 'За неделю'
};

export const STATUSES = {
  ALL: 'Выбрать статус',
  NEW: OrderStatusIds.NEW.name,
  CONFIRMED: OrderStatusIds.CONFIRMED.name,
  CANCELED: OrderStatusIds.CANCELED.name,
  TEMPRORARY: OrderStatusIds.TEMPRORARY.name
};
