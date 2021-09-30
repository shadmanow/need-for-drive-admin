import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import AvatarIcon from '@assets/images/avatar.png';
import { ReactComponent as DropdownIcon } from '@assets/images/svg/dropdown.svg';

import { logoutUser } from '@store/user/thunks';
import { ROUTES } from '@constants/routes';

import './user-menu.scss';

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
        <Link to={`${ROUTES.CARS}/new`} className='user-menu__link'>
          Добавить автомобиль
        </Link>
        <Link to={`${ROUTES.POINTS}/new`} className='user-menu__link'>
          Добавить пункт
        </Link>
        <Link
          to='/admin/login'
          className='user-menu__link'
          onClick={handleLogoutClick}
        >
          Выйти
        </Link>
      </div>
    </div>
  );
};
