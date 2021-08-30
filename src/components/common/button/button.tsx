import React, { FC } from 'react';

import './Button.scss';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ value, onClick }) => (
  <button className='button' type='button' onClick={onClick}>
    {value}
  </button>
);
