import React, { FC } from 'react';
import classNames from 'classnames';

import { ReactComponent as LoadingIcon } from '@assets/images/svg/loading.svg';

import './loader.scss';
import { LoaderProps } from './types';

export const Loader: FC<LoaderProps> = ({
  className,
  isLoading,
  loadingList,
  hideText = false
}) => {
  const classes = classNames('loader', className);
  if (!isLoading) {
    return null;
  }
  return (
    <div className={classes}>
      <LoadingIcon className='loader__icon' />
      <div className='loader__list'>
        {!hideText &&
          loadingList?.map((loading) => (
            <span key={`${loading}`}>{loading}</span>
          ))}
      </div>
      {!hideText && <span className='loader__text'>Подождите...</span>}
    </div>
  );
};
