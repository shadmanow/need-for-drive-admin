import { CarsActionTypes, CarsState, SetCarsAction } from './types';
import { CarsStateDefault } from './default';

export const carsReducer = (
  state: CarsState = CarsStateDefault,
  action: SetCarsAction
): CarsState => {
  switch (action.type) {
    case CarsActionTypes.SET_CARS:
      return { cars: action.cars };
    default:
      return state;
  }
};
