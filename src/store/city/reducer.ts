import { CityActionTypes, CityState, SetCitiesAction } from './types';
import { CityStateDefault } from './default';

export const citiesReducer = (
  state: CityState = CityStateDefault,
  action: SetCitiesAction
): CityState => {
  switch (action.type) {
    case CityActionTypes.SET_CITIES:
      return { cities: action.cities };
    default:
      return state;
  }
};
