import React from 'react';
import './TextField.scss';

export enum TextFieldTypes {
  TEXT = 'text',
  PASSWORD = 'password',
}

interface Props {
  type?: TextFieldTypes;
  label: string | undefined;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export const TextField: React.FC<Props> = ({
  label,
  value,
  onChange,
  type = TextFieldTypes.TEXT,
  placeholder,
  disabled,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className='textfield'>
      <label className='textfield__label'>{label}</label>
      <input
        autoComplete='off'
        type={type}
        className='textfield__input'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
