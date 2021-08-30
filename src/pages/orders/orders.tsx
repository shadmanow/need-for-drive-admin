import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { logoutUser } from '@store/user/thunks';
import Button from '@components/common/button';

import './orders.scss';

export const Orders: FC = (): JSX.Element => {
  const disptach = useDispatch();
  const handleClick = () => disptach(logoutUser());

  return (
    <div className='orders'>
      <h1>Orders Page</h1>
      <Button value='Выйти' onClick={handleClick} />
    </div>
  );
};
