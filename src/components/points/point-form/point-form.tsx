import React, { FC, useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

import { getAddressLocation, getCityLocation } from '@store/location/thunks';
import { LOCATION_LOADING_TYPE } from '@store/location/types';
import { Loading } from '@store/loadings/types';
import { useAppSelector } from '@store/hooks';
import { Point } from '@store/points/types';
import {
  addPoint,
  changePoint,
  clearCurrentPoint,
  deletePoint,
  setCurrentPoint
} from '@store/current-point/thunks';
import {
  selectCities,
  selectLoadings,
  selectLocation,
  selectCurrentPoint,
  selectCurrentPointStatus
} from '@store/selectors';

import { Panel } from '@components/wrapper';
import Select from '@components/common/select';
import TextField from '@components/common/text-field';
import Loader from '@components/loader';
import Button from '@components/common/button';
import Map from '@components/map';

import './point-form.scss';

export const PointForm: FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const cities = useAppSelector(selectCities);
  const loadings = useAppSelector(selectLoadings);
  const location = useAppSelector(selectLocation);

  const currentPoint = useAppSelector(selectCurrentPoint);
  const currentPointStatus = useAppSelector(selectCurrentPointStatus);

  const [mapCenter, setMapCenter] = useState<[number, number]>();
  const [mapMarker, setMapMarker] = useState<[number, number]>();
  const isMapLoading = useMemo(
    () =>
      !!loadings.find(
        (loading: Loading) => loading.type === LOCATION_LOADING_TYPE
      ),
    [loadings]
  );

  const cityOptions = useMemo(
    () => [...cities.map(({ name }) => name)],
    [cities]
  );

  useEffect(() => {
    if (currentPoint) {
      dispatch(getCityLocation(currentPoint.cityId.name));
      if (currentPoint.address) {
        dispatch(
          getAddressLocation(
            `${currentPoint.cityId.name}, ${currentPoint.address}`
          )
        );
      }
    }
    return () => {
      dispatch(clearCurrentPoint());
    };
  }, []);

  useEffect(() => {
    if (currentPointStatus) {
      history.push(ROUTES.POINTS);
    }
  }, [currentPointStatus]);

  useEffect(() => {
    if (location.city) {
      const { latLng } = location.city;
      setMapCenter([latLng.lat, latLng.lng]);
    }
  }, [location.city]);

  useEffect(() => {
    if (location.address) {
      const { latLng, street } = location.address;
      setMapMarker([latLng.lat, latLng.lng]);
      if (street) {
        dispatch(
          setCurrentPoint({ ...currentPoint, address: street } as Point)
        );
      }
    }
  }, [location.address]);

  const handleMapClick = (coords: [number, number]) => {
    dispatch(getAddressLocation(coords));
  };

  const handleChange = (change: { name: string; value: string }) => {
    dispatch(
      setCurrentPoint({ ...currentPoint, [change.name]: change.value } as Point)
    );
  };

  const handleCitySelect = (change: { value: string }) => {
    const cityId = cities.find(({ name }) => name === change.value);
    if (cityId) {
      dispatch(
        setCurrentPoint({
          ...currentPoint,
          address: '',
          cityId
        } as Point)
      );
      dispatch(getCityLocation(cityId.name));
    }
  };

  const handleApply = () => {
    if (currentPoint?.id) {
      dispatch(changePoint());
    } else {
      dispatch(addPoint());
    }
  };

  const handleCancel = () => {
    history.push(ROUTES.POINTS);
  };

  const handleDelete = () => {
    dispatch(deletePoint());
  };

  return (
    <div className='point-form'>
      <Panel
        title='Для выбора пункта кликните по карте'
        className='point-form__map'
      >
        <div className='point-form__map-wrapper'>
          <Map center={mapCenter} marker={mapMarker} onClick={handleMapClick} />
          <Loader hideText isLoading={isMapLoading} />
        </div>
      </Panel>

      <Panel title='Настройки пункта' className='point-form__settings'>
        <Select
          label='Город'
          value={currentPoint?.cityId.name || cities[0].name}
          options={cityOptions}
          onSelect={handleCitySelect}
        />
        <TextField
          name='address'
          label='Адрес'
          error={!currentPoint?.address.length}
          value={currentPoint?.address || ''}
          onChange={handleChange}
        />
        <TextField
          name='name'
          label='Имя'
          error={!currentPoint?.name.length}
          value={currentPoint?.name || ''}
          onChange={handleChange}
        />

        <div className='point-form__buttons'>
          <Button
            disabled={
              !currentPoint?.address.length || !currentPoint?.name.length
            }
            value={currentPoint?.id ? 'Сохранить' : 'Добавить'}
            onClick={handleApply}
          />
          <Button value='Отменить' color='light' onClick={handleCancel} />
          {currentPoint?.id && (
            <Button value='Удалить' color='danger' onClick={handleDelete} />
          )}
        </div>
      </Panel>
    </div>
  );
};
