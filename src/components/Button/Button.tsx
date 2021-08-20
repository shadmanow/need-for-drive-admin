import React from 'react';
import './Button.scss';

interface Props {
  value: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ value, onClick }) => (
  <button className='button' type='button' onClick={() => onClick()}>
    {value}
  </button>
);
