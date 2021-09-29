import { CitiesActionTypes, CitiesState, SetCitiesAction } from './types';
import { CitiesStateDefault } from './default';

export const citiesReducer = (
  state: CitiesState = CitiesStateDefault,
  action: SetCitiesAction
): CitiesState => {
  switch (action.type) {
    case CitiesActionTypes.SET_CITIES:
      return { cities: action.cities };
    default:
      return state;
  }
};
