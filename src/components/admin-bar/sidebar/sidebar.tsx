import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { getEntries } from '@utils';

import menuOpen from '@assets/images/svg/menu-open.svg';
import menuClose from '@assets/images/svg/menu-close.svg';

import Logo from '@components/logo';
import { LINKS } from '@constants/links';

import './sidebar.scss';

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = classNames('sidebar__nav', {
    sidebar__nav_closed: !isOpen
  });

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className='sidebar'>
      <button onClick={handleClick} className='sidebar__menu' type='button'>
        <img src={isOpen ? menuClose : menuOpen} alt='menu-open-icon' />
      </button>
      <div className='sidebar__header'>
        <Logo />
      </div>
      <nav className={classes}>
        <ul>
          {getEntries(LINKS).map(([, link]) => (
            <li key={link.name}>
              <NavLink
                className='sidebar__link'
                to={link.to}
                activeClassName='sidebar__link_active'
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
