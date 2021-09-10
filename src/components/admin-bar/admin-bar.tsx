import React, { FC } from 'react';

import './admin-bar.scss';
import Search from './search';
import Sidebar from './sidebar';
import UserMenu from './user-menu';
import Notification from './notification';

export const AdminBar: FC = () => (
  <header className='admin-bar'>
    <Sidebar />
    <Search />
    <Notification />
    <UserMenu />
  </header>
);
