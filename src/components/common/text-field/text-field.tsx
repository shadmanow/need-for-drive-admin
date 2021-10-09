import React, { ChangeEvent, FC, useState } from 'react';
import classNames from 'classnames';
import './text-field.scss';

import { TextFieldProps } from './types';

export const TextField: FC<TextFieldProps> = ({
  label,
  value,
  name,
  onChange,
  error,
  type = 'text',
  placeholder,
  disabled
}) => {
  const [firstChanged, setFirstChanged] = useState(false);

  const classes = classNames('textfield__input', {
    textfield__input_error: error && firstChanged
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange({ name: e.target.name, value: e.target.value });
    }
    if (!firstChanged) {
      setFirstChanged(true);
    }
  };

  return (
    <div className='textfield'>
      {label && <label className='textfield__label'>{label}</label>}
      <input
        autoComplete='off'
        type={type}
        name={name}
        className={classes}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
