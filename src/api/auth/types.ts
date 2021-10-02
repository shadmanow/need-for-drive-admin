export interface LoginResponse {
  data: {
    token_type: string;
    access_token: string;
    expires_in: number;
    refresh_token: string;
    user_id: string;
  };
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginData {
  accessToken: string;
  refreshToken: string;
}

export class LoginUnauthorizedError extends Error {
  constructor() {
    super(undefined);
  }
}
