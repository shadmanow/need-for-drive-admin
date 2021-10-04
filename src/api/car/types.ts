import { Car } from '@store/cars/types';

export interface GerCarsResponse {
  data: {
    data: Car[];
  };
}

export interface GetCarsData {
  cars: Car[];
}

export interface AddCarResponse {
  data: {
    data: Car;
  };
}

export interface AddCarData {
  car: Car;
}

export interface ChangeCarResponse {
  data: {
    data: Car;
  };
}

export interface ChangeCarData {
  car: Car;
}

export interface DeleteCarResponse {
  data: {
    data: Car;
  };
}

export interface DeleteCarData {
  car: Car;
}
