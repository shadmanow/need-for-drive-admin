import React, { FC } from 'react';

import './checkbox.scss';
import { CheckboxProps } from './types';

export const Checkbox: FC<CheckboxProps> = ({
  label,
  checked,
  onClick,
  name,
  disabled
}) => {
  const handleClick = () => {
    if (onClick) onClick({ name: name || 'undefined', value: checked });
  };
  return (
    <div className='checkbox' onClick={handleClick}>
      <input
        className='checkbox__input'
        type='checkbox'
        checked={checked}
        disabled={disabled}
        readOnly
      />
      {label && <label className='checkbox__label'>{label}</label>}
    </div>
  );
};
