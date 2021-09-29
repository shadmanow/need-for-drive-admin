import React, { FC, useState } from 'react';

import './notification.scss';
import { ReactComponent as NotificationIcon } from '@assets/images/svg/notification.svg';

export const Notification: FC = () => {
  const [notificationCount, setNotificationCount] = useState<number>(
    () => Math.floor(Math.random() * 10) + 1
  );
  const handleClick = () =>
    setNotificationCount(Math.floor(Math.random() * 10) + 1);
  return (
    <div className='notification'>
      <NotificationIcon className='notification__icon' onClick={handleClick} />
      <span className='notification__count'>{notificationCount}</span>
    </div>
  );
};
