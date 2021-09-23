import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { logoutUser } from '@store/user/thunks';

import './user-menu.scss';
import AvatarIcon from '@assets/images/avatar.png';
import { ReactComponent as DropdownIcon } from '@assets/images/svg/dropdown.svg';

export const UserMenu: FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const classes = classNames('user-menu__dropdown', {
    'user-menu__dropdown_closed': !isOpen
  });

  const handleLogoutClick = () => dispatch(logoutUser());

  return (
    <div
      className='user-menu'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <img src={AvatarIcon} alt='user-menu-icon' className='user-menu__icon' />
      <span className='user-menu__name'>Admin</span>
      <DropdownIcon className='user-menu__dropdown-icon' />
      <div className={classes}>
        <a
          href='/admin/login'
          className='user-menu__dropdown-button'
          onClick={handleLogoutClick}
        >
          Выйти
        </a>
      </div>
    </div>
  );
};
