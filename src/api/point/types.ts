import { Point } from '@store/points/types';

export interface GetPointsResponse {
  data: {
    data: Point[];
  };
}

export interface GetPointsData {
  points: Point[];
}

export interface AddPointResponse {
  data: {
    data: Point;
  };
}

export interface AddPointData {
  point: Point;
}

export interface ChangePointResponse {
  data: {
    data: Point;
  };
}

export interface ChangePointData {
  point: Point;
}
