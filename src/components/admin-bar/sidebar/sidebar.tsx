import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { ROUTES } from '@constants/routes';

import openIcon from '@assets/images/svg/menu-open.svg';
import closeIcon from '@assets/images/svg/menu-close.svg';

import Logo from '@components/logo';

import './sidebar.scss';

export const Sidebar: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const classes = classNames('sidebar__nav', {
    sidebar__nav_opened: isOpened
  });

  const routes = [
    {
      name: 'Заказы',
      to: ROUTES.ORDERS
    },
    {
      name: 'Автомобили',
      to: ROUTES.CARS
    },
    {
      name: 'Пункты выдачи',
      to: ROUTES.POINTS
    },
    {
      name: 'Добавить автомобиль',
      to: `${ROUTES.CARS}/new`
    },
    {
      name: 'Добавить пункт',
      to: `${ROUTES.POINTS}/new`
    }
  ];

  const handleClick = () => setIsOpened(!isOpened);

  return (
    <div className='sidebar'>
      <button onClick={handleClick} className='sidebar__button' type='button'>
        <img src={isOpened ? closeIcon : openIcon} alt='menu-open-icon' />
      </button>
      <div className='sidebar__logo'>
        <Logo />
      </div>
      <nav className={classes}>
        <ul>
          {routes.map((route) => (
            <li key={`nav-${route.name}`}>
              <NavLink
                className='sidebar__link'
                exact
                to={route.to}
                activeClassName='sidebar__link_active'
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
