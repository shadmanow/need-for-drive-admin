export interface City {
  name: string;
  id: string;
}

export interface CityState {
  readonly cities: City[];
}

export enum CityActionTypes {
  SET_CITIES = 'SET_CITIES'
}

export interface SetCitiesAction {
  type: CityActionTypes.SET_CITIES;
  cities: City[];
}
