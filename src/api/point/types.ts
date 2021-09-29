import { Point } from '@store/points/types';

export interface FetchPointsResponse {
  data: {
    data: Point[];
  };
}

export interface FetchPointsData {
  points: Point[];
}
