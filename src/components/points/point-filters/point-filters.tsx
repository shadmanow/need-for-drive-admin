import React, { FC, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { setFilter } from '@store/filter/thunks';
import { selectCities } from '@store/selectors';
import { useAppSelector } from '@store/hooks';
import { Point } from '@store/points/types';

import Select from '@components/common/select';
import Button from '@components/common/button';

import './point-filters.scss';
import { FILTER_POINTS } from './constants';

export const PointFilters: FC = () => {
  const dispatch = useDispatch();
  const cities = useAppSelector(selectCities);
  const cityOptions = useMemo(
    () => ['Выбрать Город', ...cities.map((city) => city.name)],
    [cities]
  );
  const [cityOption, setCityOption] = useState(cityOptions[0]);

  const handleConfirm = () => {
    if (cityOption === cityOptions[0]) {
      dispatch(setFilter(FILTER_POINTS, () => true));
    } else {
      dispatch(
        setFilter(
          FILTER_POINTS,
          ({ cityId }: Point) => cityId?.name === cityOption
        )
      );
    }
  };

  const handleClear = () => {
    setCityOption(cityOptions[0]);
    dispatch(setFilter(FILTER_POINTS, () => true));
  };

  return (
    <div className='point-filters'>
      <Select
        value={cityOption}
        options={cityOptions}
        onSelect={({ value }) => setCityOption(value)}
      />
      <Button value='Сбросить' color='danger' onClick={handleClear} />
      <Button value='Применить' onClick={handleConfirm} />
    </div>
  );
};
