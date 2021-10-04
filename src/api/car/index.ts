import { Car } from '@store/cars/types';

import baseApi from '../base';
import { initFormData, transformThumbnail } from './helpers';
import {
  AddCarData,
  AddCarResponse,
  ChangeCarData,
  ChangeCarResponse,
  GetCarsData,
  GerCarsResponse
} from './types';

export const getCarsReq = async (): Promise<GetCarsData> => {
  const response: GerCarsResponse = await baseApi.get('/api/db/car');
  return {
    cars: response.data.data.map((car) => transformThumbnail(car))
  };
};

export const addCarReq = async (car: Car): Promise<AddCarData> => {
  const formData = initFormData(car);
  const response: AddCarResponse = await baseApi.post('/api/db/car', formData);
  return {
    car: transformThumbnail(response.data.data)
  };
};

export const changeCarReq = async (car: Car): Promise<ChangeCarData> => {
  const formData = initFormData(car);
  const response: ChangeCarResponse = await baseApi.put(
    `/api/db/car/${car.id}`,
    formData
  );
  return {
    car: transformThumbnail(response.data.data)
  };
};

export const deleteCarReq = async (car: Car): Promise<void> => {
  await baseApi.delete(`/api/db/car/${car.id}`);
};
