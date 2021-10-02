import React, { FC } from 'react';

import { URLS } from '@constants/urls';
import './footer.scss';

export const Footer: FC = (): JSX.Element => (
  <footer className='footer'>
    <a
      className='footer__link'
      href={URLS.NEED_FOR_DRIVE}
      rel='noreferrer'
      target='_blank'
    >
      Need for drive
    </a>
    <p className='footer__copyright'>Copyright © 2020 Simbirsoft</p>
  </footer>
);
