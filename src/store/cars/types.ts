export const CARS_LOADING = 'Загрузка автомобилей...';
export const CARS_LOADING_FAILED = 'Не удалось загрузить автомобили';

export interface Car {
  createdAt?: number;
  name: string;
  description?: string;
  categoryId?: {
    name: string;
    description: string;
    id: string;
  };
  priceMax?: number;
  thumbnail?: {
    path: string;
    mimetype: string;
    originalname: string;
    size: number;
  };
  priceMin?: number;
  number?: string;
  tank?: number;
  colors: string[];
  id?: string;
}

export interface CarsState {
  readonly cars: Car[];
}

export enum CarsActionTypes {
  SET_CARS = 'SET_CARS'
}

export interface SetCarsAction {
  type: CarsActionTypes.SET_CARS;
  cars: Car[];
}
