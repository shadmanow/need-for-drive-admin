import { Location } from '@store/location/types';

export interface FetchLocationResponse {
  data: {
    results: [
      {
        locations: Location[];
      }
    ];
  };
}

export interface FetchLocationData {
  location: Location;
}
