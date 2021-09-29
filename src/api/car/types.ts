import { Car } from '@store/cars/types';

export interface FetchCarsResponse {
  data: {
    data: Car[];
  };
}

export interface FetchCarsData {
  cars: Car[];
}
