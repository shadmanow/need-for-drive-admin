import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { getEntries } from '@utils';

import openIcon from '@assets/images/svg/menu-open.svg';
import closeIcon from '@assets/images/svg/menu-close.svg';

import Logo from '@components/logo';
import { LINKS } from '@constants/links';

import './sidebar.scss';

export const Sidebar: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const classes = classNames('sidebar__nav', {
    sidebar__nav_opened: isOpened
  });

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
          {getEntries(LINKS).map(([, link]) => (
            <li key={`nav-${link.name}`}>
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
