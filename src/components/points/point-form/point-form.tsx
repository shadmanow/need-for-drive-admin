import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCityLocation } from '@store/location/thunks';
import { LOCATION_LOADING_TYPE } from '@store/location/types';
import { Loading } from '@store/loadings/types';
import { Point } from '@store/points/types';
import { useAppSelector } from '@store/hooks';
import { selectCities, selectLoadings, selectLocation } from '@store/selectors';

import { Panel } from '@components/wrapper';
import Select from '@components/common/select';
import TextField from '@components/common/text-field';
import Loader from '@components/loader';
import Button from '@components/common/button';
import Map from '@components/map';

import './point-form.scss';

export const PointForm: FC<{ point: Point }> = ({ point }): JSX.Element => {
  const cities = useAppSelector(selectCities);
  const loadings = useAppSelector(selectLoadings);
  const location = useAppSelector(selectLocation);
  const dispatch = useDispatch();

  const [mapCenter, setMapCenter] = useState<[number, number]>();
  const [initValues, setInitValues] = useState({
    city: point.cityId?.name || cities[0].name,
    address: point.address || ''
  });

  useEffect(() => {
    dispatch(getCityLocation(initValues.city));
  }, []);

  useEffect(() => {
    if (location.city) {
      const { latLng } = location.city;
      setMapCenter([latLng.lat, latLng.lng]);
    }
  }, [location.city]);

  const handleSelectCity = (select: { value: string }) => {
    setInitValues({ ...initValues, city: select.value });
    dispatch(getCityLocation(select.value));
  };

  return (
    <div className='point-form'>
      <Panel
        className='point-form__map'
        title='Для выбора пункта кликните по карте'
      >
        <Map center={mapCenter} />
        <Loader
          hideText
          isLoading={
            !!loadings.find(
              (loading: Loading) => loading.type === LOCATION_LOADING_TYPE
            )
          }
        />
      </Panel>

      <Panel className='point-form__settings' title='Настройки пункта'>
        <Select
          label='Город'
          value={initValues.city}
          options={[...cities.map(({ name }) => name)]}
          onSelect={handleSelectCity}
        />
        <TextField
          value={initValues.address}
          label='Пункт выдачи'
          onChange={(address) => setInitValues({ ...initValues, address })}
        />

        <div className='point-form__buttons'>
          <Button value={point.id ? 'Сохранить' : 'Добавить'} />
          <Button value='Отменить' color='light' />
          <Button value='Удалить' color='danger' />
        </div>
      </Panel>
    </div>
  );
};
