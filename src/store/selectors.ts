import type { AppState } from './types';

export const selectAuth = (state: AppState) => state.auth;
export const selectLoadings = (state: AppState) => state.ui.loadings.loadings;
export const selectAlert = (state: AppState) => state.ui.alert;
export const selectOrders = (state: AppState) => state.orders.orders;
export const selectFilter = (state: AppState) => state.filter.filter;
export const selectCities = (state: AppState) => state.cities.cities;
export const selectCars = (state: AppState) => state.cars.cars;
export const selectCategories = (state: AppState) =>
  state.categories.categories;
export const selectPoints = (state: AppState) => state.points.points;
export const selectLocation = (state: AppState) => state.location;
export const selectError = (state: AppState) => state.error;
