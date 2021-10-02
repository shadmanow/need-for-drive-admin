import React, { FC } from 'react';
import classNames from 'classnames';

import './Button.scss';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps & { className?: string }> = ({
  value,
  onClick,
  variant = 'default',
  className,
  disabled
}) => {
  const classes = classNames('button', className, {
    button_outlined: variant === 'outlined',
    button_default: variant === 'default'
  });
  return (
    <button
      className={classes}
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};
