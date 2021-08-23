export interface Auth {
  refreshToken: string;
  accessToken: string;
}

export interface AuthState {
  auth: Auth | null;
  isLoggedIn: boolean;
}

export enum AuthActionTypes {
  SET_AUTH = 'SET_AUTH'
}

export interface SetAuthAction {
  type: AuthActionTypes.SET_AUTH;
  payload: Auth;
}

export type AuthAction = SetAuthAction;
