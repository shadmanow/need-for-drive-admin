import React, { ChangeEvent, FC } from 'react';

import './select.scss';
import { SelectProps } from './types';

export const Select: FC<SelectProps> = ({
  defaultValue,
  values,
  onSelect,
  name,
  label
}): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onSelect) {
      onSelect({ name: event.target.name, value: event.target.value });
    }
  };
  return (
    <div className='select'>
      {label && <label className='select__label'>{label}</label>}
      <select value={defaultValue} name={name} onChange={handleChange}>
        {values.map((value) => (
          <option key={`${defaultValue}-${value}`}>{value}</option>
        ))}
      </select>
    </div>
  );
};
