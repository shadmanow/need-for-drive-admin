import cookies from 'react-cookies';
import { Dispatch } from 'redux';
import { login } from '@api/auth';
import { LoginParams, LoginUnauthorizedError } from '@api/auth/types';

import { alertShow } from '@store/alert/thunks';
import { loadingStart, loadingStop } from '@store/loading/thunks';

import {
  UserActionTypes,
  LoginSuccessAction,
  LoginFailureAction
} from './types';

const loginSuccessAction = (
  accessToken: string,
  refreshToken: string
): LoginSuccessAction => ({
  type: UserActionTypes.LOGIN_SUСCESS,
  accessToken,
  refreshToken
});

const loginFailureAction = (): LoginFailureAction => ({
  type: UserActionTypes.LOGIN_FAILURE
});

export const loginUser =
  (data: LoginParams) => async (dispatch: Dispatch<any>) => {
    dispatch(loadingStart());
    try {
      const { accessToken, refreshToken } = await login(data);

      cookies.save('user', { accessToken, refreshToken }, { path: '/' });

      dispatch(loginSuccessAction(accessToken, refreshToken));
      dispatch(alertShow('Вы успешно вошли', 'success'));
      dispatch(loadingStop());
    } catch (e) {
      dispatch(loadingStop());
      dispatch(loginFailureAction());
      if (e instanceof LoginUnauthorizedError) {
        dispatch(alertShow('Неправильное имя пользователя и пароль', 'error'));
      } else {
        dispatch(alertShow('Неизвестная ошибка', 'error'));
      }
    }
  };

export const logoutUser = () => async (dispatch: Dispatch<any>) => {
  cookies.remove('user', { path: '/' });
  dispatch(loginFailureAction());
  dispatch(alertShow('Вы вышли', 'success'));
};

export const checkUser = () => async (dispatch: Dispatch<any>) => {
  const user = cookies.load('user');
  if (user) {
    const { accessToken, refreshToken } = user;
    dispatch(loginSuccessAction(accessToken, refreshToken));
    dispatch(alertShow('Вы успешно вошли', 'success'));
  }
};
