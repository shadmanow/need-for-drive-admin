import React, { FC } from 'react';

import './notification.scss';
import NotificationImage from '@assets/images/svg/notification.svg';

const notificationCount: number = 2;

export const Notification: FC = () => (
  <div className='notification'>
    <NotificationImage className='notification__image' />
    <span className='notification__count'>{notificationCount}</span>
  </div>
);
