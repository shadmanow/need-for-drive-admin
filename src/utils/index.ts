import moment from 'moment';

export const toDateString = (number: number) =>
  moment(number).format('DD.MM.yyyy HH:mm');

export const toRubFormat = (number: number) =>
  new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(number);

export const getEntries = <T>(obj: T): Entries<T> => Object.entries(obj) as any;
