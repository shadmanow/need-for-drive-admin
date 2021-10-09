import { Dispatch } from 'redux';

import { getLocationReq } from '@api/mapquest';

import { loadingStart, loadingStop } from '@store/loadings/thunks';
import { alertShow } from '@store/alert/thunks';

import {
  LocationActionTypes,
  SetCityLocationAction,
  Location,
  SetAddressLocationAction,
  LOCATION_LOADING,
  LOCATION_LOADING_FAILED,
  LOCATION_LOADING_TYPE
} from './types';

const setCityLocationAction = (city: Location): SetCityLocationAction => ({
  type: LocationActionTypes.SET_CITY_LOCATION,
  city
});

const setAddressLocationAction = (
  address: Location
): SetAddressLocationAction => ({
  type: LocationActionTypes.SET_ADDRESS_LOCATION,
  address
});

export const getCityLocation =
  (city: string | [number, number]) => async (dispatch: Dispatch<any>) => {
    dispatch(loadingStart(LOCATION_LOADING, LOCATION_LOADING_TYPE));
    try {
      const { location } = await getLocationReq(city);
      dispatch(setCityLocationAction(location));
      dispatch(loadingStop(LOCATION_LOADING, LOCATION_LOADING_TYPE));
    } catch (getCityLocationError) {
      dispatch(loadingStop(LOCATION_LOADING, LOCATION_LOADING_TYPE));
      dispatch(alertShow(LOCATION_LOADING_FAILED, 'error'));
      throw getCityLocationError;
    }
  };

export const getAddressLocation =
  (address: string | [number, number]) => async (dispatch: Dispatch<any>) => {
    dispatch(loadingStart(LOCATION_LOADING, LOCATION_LOADING_TYPE));
    try {
      const { location } = await getLocationReq(address);
      dispatch(setAddressLocationAction(location));
      dispatch(loadingStop(LOCATION_LOADING, LOCATION_LOADING_TYPE));
    } catch (getAddressLocationError) {
      dispatch(loadingStop(LOCATION_LOADING, LOCATION_LOADING_TYPE));
      dispatch(alertShow(LOCATION_LOADING_FAILED, 'error'));
      throw getAddressLocationError;
    }
  };
