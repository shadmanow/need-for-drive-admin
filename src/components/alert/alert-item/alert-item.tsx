import React, { FC, useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import './alert-item.scss';
import { Alert } from '@store/alert/types';
import { alertHide } from '@store/alert/thunks';

export const AlertItem: FC<{ alert: Alert }> = ({ alert }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [willHide, setWillHide] = useState(false);
  const dispatch = useDispatch();

  const classes = classNames('alert', {
    alert_success: alert.status === 'success',
    alert_error: alert.status === 'error',
    alert_hide: willHide
  });

  useEffect(() => {
    if (!ref || !ref.current) return () => {};
    const instanse = ref.current;

    const transitionEvent = () => dispatch(alertHide(alert));

    instanse.addEventListener('transitionend', transitionEvent);
    const timeout = setTimeout(() => setWillHide(true), 3000);

    return () => {
      clearTimeout(timeout);
      instanse.removeEventListener('transitionend', transitionEvent);
    };
  }, []);

  return (
    <div className={classes} ref={ref}>
      <span>{alert.text}</span>
    </div>
  );
};
