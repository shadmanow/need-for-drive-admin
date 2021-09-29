import { City } from '@store/cities/types';

export interface FetchCitiesResponse {
  data: {
    data: City[];
  };
}

export interface FetchCitiesData {
  cities: City[];
}
