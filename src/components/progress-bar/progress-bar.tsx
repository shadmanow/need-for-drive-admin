import React, { FC } from 'react';

import './progress-bar.scss';

export const ProgressBar: FC<{
  progress?: number;
}> = ({ progress = 0 }) => (
  <div className='progress-bar'>
    <span className='progress-bar__label'>Заполнено</span>
    <span className='progress-bar__number'>{progress}%</span>
    <div className='progress-bar__wrapper'>
      <div className='progress-bar__line' style={{ width: `${progress}%` }} />
    </div>
  </div>
);
