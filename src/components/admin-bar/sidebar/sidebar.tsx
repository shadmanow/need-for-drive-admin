import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import OpenMenu from '@assets/images/svg/menu.svg';
import CloseMenu from '@assets/images/svg/close.svg';
import Logo from '@components/logo';
import { links } from '@constants/links';

import './sidebar.scss';

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = classNames('sidebar__nav', {
    sidebar__nav_closed: !isOpen
  });

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className='sidebar'>
      {isOpen ? (
        <CloseMenu className='sidebar__image' onClick={handleClick} />
      ) : (
        <OpenMenu className='sidebar__image' onClick={handleClick} />
      )}
      <div className='sidebar__header'>
        <Logo />
      </div>
      <nav className={classes}>
        <ul>
          {links.map((link) => (
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
