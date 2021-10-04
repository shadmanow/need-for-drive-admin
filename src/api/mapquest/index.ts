import axios from 'axios';
import { GetLocationData, GetLocationResponse } from './types';

const mapquestApi = axios.create({
  baseURL: process.env.REACT_APP_MAPQUEST_API_URL,
  params: {
    key: process.env.REACT_APP_MAPQUEST_API_KEY
  }
});

export const getLocationReq = async (
  loc: string | [number, number]
): Promise<GetLocationData> => {
  const response: GetLocationResponse = await mapquestApi.get(
    typeof loc === 'string' ? `/address` : `/reverse`,
    {
      params: {
        ...mapquestApi.defaults.params,
        location: typeof loc === 'string' ? loc : loc.join(',')
      }
    }
  );
  const location = response.data.results[0].locations.find(
    ({ adminArea1 }) => adminArea1 === 'RU'
  );
  if (!location) {
    throw new Error(`Can't find ${loc} address`);
  }
  return {
    location
  };
};
