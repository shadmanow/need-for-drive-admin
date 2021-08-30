import {
  UserActionTypes,
  LoginSuccessAction,
  LoginFailureAction
} from './types';

export const loginSuccessAction = (
  accessToken: string,
  refreshToken: string
): LoginSuccessAction => ({
  type: UserActionTypes.LOGIN_SUСCESS,
  accessToken,
  refreshToken
});

export const loginFailureAction = (): LoginFailureAction => ({
  type: UserActionTypes.LOGIN_FAILURE
});
