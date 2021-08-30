export interface UserState {
  readonly isLoggedIn: boolean;
  readonly accessToken: string | null;
  readonly refreshToken: string | null;
}

export enum UserActionTypes {
  LOGIN_SUСCESS = 'LOGIN_SUСCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE'
}

export interface LoginSuccessAction {
  type: UserActionTypes.LOGIN_SUСCESS;
  accessToken: string;
  refreshToken: string;
}

export interface LoginFailureAction {
  type: UserActionTypes.LOGIN_FAILURE;
}

export type UserAction = LoginSuccessAction | LoginFailureAction;
