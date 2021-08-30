import type { AppState } from './types';

export const selectAuth = (state: AppState) => state.auth;
export const selectLoading = (state: AppState) => state.ui.loading;
export const selectAlert = (state: AppState) => state.ui.alert;
