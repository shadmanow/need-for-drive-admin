import React, { FC } from 'react';

import './checkbox.scss';
import { CheckboxProps } from './types';

export const Checkbox: FC<CheckboxProps> = ({
  label,
  checked,
  onClick,
  disabled
}) => (
  <div className='checkbox' onClick={onClick}>
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
