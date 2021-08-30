import { UserAction, UserActionTypes, UserState } from './types';
import { UserStateDefault } from './default';

export const authReducer = (
  state: UserState = UserStateDefault,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUСCESS:
      return {
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        isLoggedIn: true
      };
    case UserActionTypes.LOGIN_FAILURE:
      return {
        accessToken: null,
        refreshToken: null,
        isLoggedIn: false
      };
    default:
      return state;
  }
};
