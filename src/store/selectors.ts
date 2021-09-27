import type { AppState } from './types';

export const selectAuth = (state: AppState) => state.auth;
export const selectLoading = (state: AppState) => state.ui.loading;
export const selectAlert = (state: AppState) => state.ui.alert;
export const selectOrders = (state: AppState) => state.orders;
export const selectFilter = (state: AppState) => state.filter;
export const selectCities = (state: AppState) => state.cities;
export const selectCars = (state: AppState) => state.cars;
export const selectCategories = (state: AppState) => state.categories;
export const selectError = (state: AppState) => state.error;
