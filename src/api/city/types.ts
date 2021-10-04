import { City } from '@store/cities/types';

export interface GetCitiesResponse {
  data: {
    data: City[];
  };
}

export interface GetCitiesData {
  cities: City[];
}
