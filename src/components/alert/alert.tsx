import React, { FC } from 'react';

import './alert.scss';
import { useAppSelector } from '@store/hooks';
import { selectAlert } from '@store/selectors';
import { AlertItem } from './alert-item/alert-item';

export const Alert: FC = (): JSX.Element | null => {
  const { alerts } = useAppSelector(selectAlert);

  return (
    <div className='alert-container'>
      {!!alerts.length &&
        alerts.map((alert) => <AlertItem key={alert.id} alert={alert} />)}
    </div>
  );
};
