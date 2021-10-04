import {
  LocationAddressStateDefault,
  LocationCityStateDefault
} from './default';
import {
  LocationAction,
  LocationActionTypes,
  LocationAddressState,
  LocationCityState
} from './types';

export const locationCityReducer = (
  state: LocationCityState = LocationCityStateDefault,
  action: LocationAction
): LocationCityState => {
  switch (action.type) {
    case LocationActionTypes.SET_CITY_LOCATION:
      return { city: action.city };
    default:
      return state;
  }
};

export const locationAddressReducer = (
  state: LocationAddressState = LocationAddressStateDefault,
  action: LocationAction
): LocationAddressState => {
  switch (action.type) {
    case LocationActionTypes.SET_ADDRESS_LOCATION:
      return { address: action.address };
    default:
      return state;
  }
};
