import { Car } from '@store/car/types';

export interface FetchCarsResponse {
  data: {
    data: Car[];
  };
}

export interface FetchCarsData {
  cars: Car[];
}
