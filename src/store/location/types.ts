export const LOCATION_LOADING_TYPE = 'LOCATION_LOADING_TYPE';
export const LOCATION_LOADING = 'Загрузка локации...';
export const LOCATION_LOADING_FAILED = 'Не удалось загрузить локацию...';

export interface Location {
  street: string;
  adminArea1: string;
  latLng: {
    lat: number;
    lng: number;
  };
}

export interface LocationState {
  readonly city: Location | null;
  readonly address: Location | null;
}

export enum LocationActionTypes {
  SET_CITY_LOCATION = 'SET_CITY_LOCATION',
  SET_ADDRESS_LOCATION = 'SET_ADDRESS_LOCATION'
}

export interface SetCityLocationAction {
  type: LocationActionTypes.SET_CITY_LOCATION;
  city: Location;
}

export interface SetAddressLocationAction {
  type: LocationActionTypes.SET_ADDRESS_LOCATION;
  address: Location;
}

export type LocationAction = SetCityLocationAction | SetAddressLocationAction;
