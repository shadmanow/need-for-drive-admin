import { OrderStatusId } from './order/types';

export const OrderStatusIds = {
  NEW: { name: 'Новые', id: '5e26a191099b810b946c5d89' } as OrderStatusId,
  CONFIRMED: {
    name: 'Подтвержденные',
    id: '5e26a1f0099b810b946c5d8b'
  } as OrderStatusId,
  CANCELED: {
    name: 'Отмененые',
    id: '5e26a1f5099b810b946c5d8c'
  } as OrderStatusId,
  TEMPRORARY: {
    name: 'Временные',
    id: '6114e4502aed9a0b9b850846'
  } as OrderStatusId
};
