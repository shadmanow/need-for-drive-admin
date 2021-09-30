import React from 'react';

import { ReactComponent as LogoIcon } from '@assets/images/svg/logo.svg';
import './logo.scss';

export const Logo: React.FC = (): JSX.Element => (
  <div className='logo'>
    <LogoIcon className='logo__icon' />
    <span className='logo__text'>Need for drive</span>
  </div>
);
