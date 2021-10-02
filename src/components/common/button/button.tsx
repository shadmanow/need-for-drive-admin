import React, { FC } from 'react';
import classNames from 'classnames';

import './Button.scss';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps & { className?: string }> = ({
  icon,
  value,
  onClick,
  className,
  disabled,
  variant = 'default',
  color = 'primary'
}) => {
  const classes = classNames('button', className, {
    [`button_${color}`]: color,
    [`button_${variant}`]: variant
  });
  return (
    <button
      className={classes}
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={icon} alt='button-icon' className='button__icon' />}
      {value && <span>{value}</span>}
    </button>
  );
};
