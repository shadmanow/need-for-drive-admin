import React, { FC, useState } from 'react';

import Logo from '@components/logo';
import TextField from '@components/common/text-field';
import Button from '@components/common/button';
import useActions from '@hooks/useActions';

import './login.scss';

export const Login: FC = () => {
  const { TryLogin } = useActions();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleClick = () => TryLogin(form);

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
