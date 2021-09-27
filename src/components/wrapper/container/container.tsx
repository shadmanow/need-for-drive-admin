import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './container.scss';

export const Container: FC<{
  title?: string;
  className?: string;
  children?: ReactNode | ReactNode[];
}> = ({ title, className, children }) => {
  const classes = classNames('container', className);
  return (
    <div className={classes}>
      {title && <h1 className='container__title'>{title}</h1>}
      {children}
    </div>
  );
};
