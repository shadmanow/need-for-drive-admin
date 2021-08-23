export interface LoginResponseData {
  data: {
    token_type: string;
    access_token: string;
    expires_in: number;
    refresh_token: string;
    user_id: string;
  };
}

export interface LoginRequestData {
  username: string;
  password: string;
}

export interface LoginData {
  accessToken: string;
  refreshToken: string;
}
