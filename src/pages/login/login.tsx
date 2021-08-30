import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '@store/user/thunks';

import './login.scss';
import Logo from '@components/logo';
import TextField from '@components/common/text-field';
import Button from '@components/common/button';

export const Login: FC = (): JSX.Element => {
  const [form, setForm] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleClick = () => dispatch(loginUser(form));

  return (
    <div className='login'>
      <Logo text='Need for drive' />

      <div className='login-form'>
        <span className='login-form__title'>Вход</span>

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

        <div className='login-form__footer'>
          <a href='/#'>Запросить доступ</a>
          <Button value='Войти' onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
