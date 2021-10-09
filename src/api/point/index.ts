import { Point } from '@store/points/types';

import baseApi from '../base';
import {
  GetPointsData,
  GetPointsResponse,
  AddPointData,
  AddPointResponse,
  ChangePointData,
  ChangePointResponse
} from './types';

export const getPointsReq = async (): Promise<GetPointsData> => {
  const response: GetPointsResponse = await baseApi.get('/api/db/point');
  return {
    points: response.data.data
  };
};

export const addPointReq = async (point: Point): Promise<AddPointData> => {
  const response: AddPointResponse = await baseApi.post('/api/db/point', {
    name: point.name || ' ',
    cityId: point.cityId.id,
    address: point.address
  });
  return {
    point: response.data.data
  };
};

export const changePointReq = async (
  point: Point
): Promise<ChangePointData> => {
  const response: ChangePointResponse = await baseApi.put(
    `/api/db/point/${point.id}`,
    {
      name: point.name,
      cityId: point.cityId.id,
      address: point.address
    }
  );
  return {
    point: response.data.data
  };
};

export const deletePointReq = async (point: Point): Promise<void> => {
  await baseApi.delete(`/api/db/point/${point.id}`);
};
