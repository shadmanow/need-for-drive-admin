export const CITIES_LOADING = 'Загрузка городов...';
export const CITIES_LOADING_FAILED = 'Не удалось загрузить города';

export interface City {
  name: string;
  id: string;
}

export interface CitiesState {
  readonly cities: City[];
}

export enum CitiesActionTypes {
  SET_CITIES = 'SET_CITIES'
}

export interface SetCitiesAction {
  type: CitiesActionTypes.SET_CITIES;
  cities: City[];
}
