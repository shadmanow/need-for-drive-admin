import { City } from '@store/city/types';

export interface FetchCitiesResponse {
  data: {
    data: City[];
  };
}

export interface FetchCitiesData {
  cities: City[];
}
