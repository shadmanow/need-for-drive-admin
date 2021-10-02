import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '@store/user/thunks';

import './login.scss';
import Logo from '@components/logo';
import TextField from '@components/common/text-field';
import Button from '@components/common/button';

export const Login: FC = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleClick = () => {
    if (form.username && form.password) {
      dispatch(loginUser(form));
    }
  };

  return (
    <div className='login'>
      <Logo />

      <div className='login__form'>
        <span className='login__title'>Вход</span>

        <TextField
          label='Почта'
          value={form.username}
          error={!form.username.length}
          onChange={(username) => setForm({ ...form, username })}
          disabled={false}
        />

        <TextField
          type='password'
          label='Пароль'
          value={form.password}
          error={!form.password.length}
          onChange={(password) => setForm({ ...form, password })}
        />

        <div className='login__footer'>
          <a href='/#'>Запросить доступ</a>
          <Button value='Войти' onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
