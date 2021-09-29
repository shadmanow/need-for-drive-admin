import { LocationStateDefault } from './default';
import { LocationAction, LocationActionTypes, LocationState } from './types';

export const locationReducer = (
  state: LocationState = LocationStateDefault,
  action: LocationAction
): LocationState => {
  switch (action.type) {
    case LocationActionTypes.SET_CITY_LOCATION:
      return { ...state, city: action.city };
    case LocationActionTypes.SET_ADDRESS_LOCATION:
      return { ...state, address: action.street };
    default:
      return state;
  }
};
