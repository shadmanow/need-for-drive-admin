import { Auth, AuthAction, AuthActionTypes } from './types';

export const SetAuthAction = (auth: Auth): AuthAction => ({
  type: AuthActionTypes.SET_AUTH,
  payload: auth
});
