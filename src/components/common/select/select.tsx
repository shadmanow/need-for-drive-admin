import React, { ChangeEvent, FC } from 'react';

import './select.scss';
import { SelectProps } from './types';

export const Select: FC<SelectProps> = ({
  value,
  options,
  onSelect,
  disabled,
  name,
  label
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onSelect) {
      onSelect({ name: event.target.name, value: event.target.value });
    }
  };
  return (
    <div className='select'>
      {label && <label className='select__label'>{label}</label>}
      <select
        value={value}
        name={name}
        onChange={handleChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={`select-${option}`}>{option}</option>
        ))}
      </select>
    </div>
  );
};
