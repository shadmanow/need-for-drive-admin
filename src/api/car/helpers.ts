import { Car } from '@store/cars/types';

export const initFormData = (car: Car) => {
  const formData = new FormData();
  if (car.id) formData.append('id', car.id);

  car.colors.forEach((color) => {
    formData.append('colors', color);
  });

  formData.append('categoryId', car.categoryId?.id || '');
  formData.append('tank', (car.tank as any as string) || '');
  formData.append('name', car.name);
  formData.append('description', car.description || '');
  formData.append('number', car.number || '');
  formData.append('priceMin', (car.priceMin as any as string) || '');
  formData.append('priceMax', (car.priceMax as any as string) || '');

  if (car.imgFile) {
    formData.append('thumbnail', car.imgFile);
  }

  return formData;
};

export const transformThumbnail = (car: Car) => {
  const { thumbnail } = car;
  if (thumbnail?.path.startsWith('/files')) {
    thumbnail.path = `${process.env.REACT_APP_API_URL}/${thumbnail.path}`;
  }
  return car;
};
