import React from 'react';

import LogoImage from '@assets/images/svg/logo.svg';
import './logo.scss';

export const Logo: React.FC = () => (
  <div className='logo'>
    <LogoImage className='logo__image' />
    <span className='logo__text'>Need for drive</span>
  </div>
);
