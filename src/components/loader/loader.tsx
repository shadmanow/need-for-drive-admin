import React, { FC } from 'react';

import './loader.scss';
import { useAppSelector } from '@store/hooks';
import { selectLoading } from '@store/selectors';
import LoadingImage from '@assets/images/svg/loading.svg';

export const Loader: FC = (): JSX.Element | null => {
  const { loading } = useAppSelector(selectLoading);

  if (!loading.length) {
    return null;
  }

  return (
    <div className='loader'>
      <LoadingImage className='loader__icon' />
      <span className='loader__text'>Подождите...</span>
    </div>
  );
};
