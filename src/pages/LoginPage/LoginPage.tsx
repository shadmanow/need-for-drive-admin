import React, { useState } from 'react';

import Logo from '@components/Logo';
import TextField, { TextFieldTypes } from '@components/TextField';
import Button from '@components/Button';
import './LoginPage.scss';

interface Form {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [form, setForm] = useState<Form>({ email: '', password: '' });

  const handleEmailChange = (email: string) => {
    setForm({ ...form, email });
  };

  const handlePasswordChange = (password: string) => {
    setForm({ ...form, password });
  };

  return (
    <div className='login-page'>
      <Logo text='Need for drive' />

      <div className='login-page__form'>
        <span className='login-page__form-title'>Вход</span>
        <TextField
          label='Почта'
          value={form.email}
          onChange={handleEmailChange}
          disabled={false}
        />
        <TextField
          type={TextFieldTypes.PASSWORD}
          label='Пароль'
          value={form.password}
          onChange={handlePasswordChange}
        />
        <div className='login-page__form-footer'>
          <a href='/#'>Запросить доступ</a>
          <Button value='Войти' onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
