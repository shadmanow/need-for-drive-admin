import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';
import { selectError } from '@store/selectors';

import './error-boundary.scss';
import Button from '@components/common/button';
import { useDispatch } from 'react-redux';
import { clearError } from '@store/error/thunks';

export const ErrorBoundary: FC<{ children?: JSX.Element | JSX.Element[] }> = ({
  children
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { lastError } = useAppSelector(selectError);

  useEffect(() => {
    if (lastError) {
      return () => {
        dispatch(clearError());
      };
    }
    return undefined;
  }, []);

  if (lastError?.status === 500) {
    return (
      <div className='error-boundary'>
        <span className='error-boundary__status'>500</span>
        <h2 className='error-boundary__title'>Что-то пошло не так</h2>
        <h3 className='error-boundary__subtitle'>
          Попробуйте перезагрузить страницу
        </h3>
        <Button value='Назад' onClick={() => history.goBack()} />
      </div>
    );
  }

  return children as JSX.Element;
};
