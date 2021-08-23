import React, { FC } from 'react';

import useAppSelector from '@hooks/useAppSelector';
import LoadingImage from '@assets/images/svg/loading.svg';
import './loader.scss';

export const Loader: FC = () => {
  const { loading } = useAppSelector((state) => state.global);

  return (
    <>
      {loading && (
        <div className='loader'>
          <LoadingImage className='loader__icon' />
          <span className='loader__text'>Подождите...</span>
        </div>
      )}
    </>
  );
};
