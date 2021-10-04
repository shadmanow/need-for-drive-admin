import { Location } from '@store/location/types';

export interface GetLocationResponse {
  data: {
    results: [
      {
        locations: Location[];
      }
    ];
  };
}

export interface GetLocationData {
  location: Location;
}
