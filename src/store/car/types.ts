export interface Car {
  createdAt: number;
  name: string;
  description: string;
  categoryId: {
    name: string;
    description: string;
    id: string;
  };
  priceMax: number;
  thumbnail: {
    path: string;
    mimetype: string;
    originalname: string;
    size: number;
  };
  priceMin: number;
  number: string;
  tank: number;
  colors: string[];
  id: string;
}

export interface CarState {
  readonly cars: Car[];
}

export enum CarActionTypes {
  SET_CARS = 'SET_CARS'
}

export interface SetCarsAction {
  type: CarActionTypes.SET_CARS;
  cars: Car[];
}
