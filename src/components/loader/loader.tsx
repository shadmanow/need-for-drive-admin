import React, { FC } from 'react';

import './loader.scss';
import { useAppSelector } from '@store/hooks';
import { selectLoading } from '@store/selectors';
import { ReactComponent as LoadingIcon } from '@assets/images/svg/loading.svg';

export const Loader: FC = (): JSX.Element | null => {
  const { loading } = useAppSelector(selectLoading);

  if (!loading.length) {
    return null;
  }

  return (
    <div className='loader'>
      <LoadingIcon className='loader__icon' />
      <div className='loader__list'>
        {loading.map((_loading) => (
          <span key={`${_loading}`}>{_loading}</span>
        ))}
      </div>
      <span className='loader__text'>Подождите...</span>
    </div>
  );
};
