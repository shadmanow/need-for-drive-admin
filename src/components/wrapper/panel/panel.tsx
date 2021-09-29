import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './panel.scss';

export const Panel: FC<{
  children?: ReactNode | ReactNode[];
  title?: string;
  className?: string;
}> = ({ children, title, className }): JSX.Element => {
  const classes = classNames('panel', className);
  return (
    <div className={classes}>
      {title && <h2 className='panel__title'>{title}</h2>}
      <div className='panel__body'>{children}</div>
    </div>
  );
};
