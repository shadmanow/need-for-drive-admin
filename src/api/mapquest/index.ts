import axios from 'axios';
import { FetchLocationData, FetchLocationResponse } from './types';

const mapquestApi = axios.create({
  baseURL: process.env.REACT_APP_MAPQUEST_API_URL,
  params: {
    key: process.env.REACT_APP_MAPQUEST_API_KEY
  }
});

export const fetchLocationByName = async (
  locationName: string
): Promise<FetchLocationData> => {
  const response: FetchLocationResponse = await mapquestApi.get(`/address`, {
    params: {
      ...mapquestApi.defaults.params,
      location: locationName
    }
  });
  const location = response.data.results[0].locations.find(
    ({ adminArea1 }) => adminArea1 === 'RU'
  );
  if (!location) {
    throw new Error();
  }
  return {
    location
  };
};

export const fetchLocationByLatLng = async (
  latlng: [number, number]
): Promise<FetchLocationData> => {
  const response: FetchLocationResponse = await mapquestApi.get(`/reverse`, {
    params: {
      ...mapquestApi.defaults.params,
      location: latlng.join(',')
    }
  });
  const location = response.data.results[0].locations.find(
    ({ adminArea1 }) => adminArea1 === 'RU'
  );
  if (!location) {
    throw new Error();
  }
  return {
    location
  };
};
