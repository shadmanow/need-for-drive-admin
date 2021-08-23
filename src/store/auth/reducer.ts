import { AuthAction, AuthActionTypes, AuthState } from './types';
import { AuthStateDefault } from './default';

export const authReducer = (
  state: AuthState = AuthStateDefault,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH:
      return { ...state, isLoggedIn: true, auth: action.payload };
    default:
      return state;
  }
};
