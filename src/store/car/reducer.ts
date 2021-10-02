import { CarActionTypes, CarState, SetCarsAction } from './types';
import { CarStateDefault } from './default';

export const carsReducer = (
  state: CarState = CarStateDefault,
  action: SetCarsAction
): CarState => {
  switch (action.type) {
    case CarActionTypes.SET_CARS:
      return { cars: action.cars };
    default:
      return state;
  }
};
