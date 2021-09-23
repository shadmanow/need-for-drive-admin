import React, { ChangeEvent, FC } from 'react';
import { SelectProps } from './types';

import './select.scss';

export const Select: FC<SelectProps> = ({
  defaultValue,
  values,
  onSelect,
  name
}): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
    onSelect({ name: event.target.name, value: event.target.value });
  return (
    <select
      className='select'
      value={defaultValue}
      name={name}
      onChange={handleChange}
    >
      {values.map((value) => (
        <option key={`${defaultValue}-${value}`}>{value}</option>
      ))}
    </select>
  );
};
