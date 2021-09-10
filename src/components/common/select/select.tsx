import React, { FC } from 'react';
import { SelectProps } from './types';

import './select.scss';

export const Select: FC<SelectProps> = ({
  defaultValue,
  values,
  onSelect
}): JSX.Element => (
  <select
    className='select'
    value={defaultValue}
    onChange={(event: any) => onSelect(event.target.value)}
  >
    {values?.length &&
      values.map((value) => (
        <option key={`${defaultValue}-${value}`}>{value}</option>
      ))}
  </select>
);
