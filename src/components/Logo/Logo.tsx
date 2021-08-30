import React from 'react';

import LogoImage from '@assets/images/svg/logo.svg';
import './Logo.scss';

export const Logo: React.FC<{ text: string }> = ({ text }) => (
  <div className='logo'>
    <LogoImage className='logo__image' />
    <span className='logo__text'>{text}</span>
  </div>
);
