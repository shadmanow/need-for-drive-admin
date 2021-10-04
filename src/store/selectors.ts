import type { AppState } from './types';

export const selectAuth = (state: AppState) => state.auth;
export const selectLoadings = (state: AppState) => state.ui.loadings.loadings;
export const selectAlert = (state: AppState) => state.ui.alert;
export const selectFilter = (state: AppState) => state.filter.filter;
export const selectCities = (state: AppState) => state.cities.cities;

export const selectCars = (state: AppState) => state.cars.cars;
export const selectCurrentCar = (state: AppState) =>
  state.currentCar.currentCar;
export const selectCurrentCarStatus = (state: AppState) =>
  state.currentCar.status;

export const selectOrders = (state: AppState) => state.orders.orders;
export const selectCurrentOrder = (state: AppState) =>
  state.currentOrder.currentOrder;
export const selectCurrentOrderStatus = (state: AppState) =>
  state.currentOrder.status;

export const selectCategories = (state: AppState) =>
  state.categories.categories;

export const selectPoints = (state: AppState) => state.points.points;
export const selectCurrentPoint = (state: AppState) =>
  state.currentPoint.currentPoint;
export const selectCurrentPointStatus = (state: AppState) =>
  state.currentPoint.status;

export const selectLocation = (state: AppState) => ({
  city: state.location.city.city,
  address: state.location.address.address
});
export const selectError = (state: AppState) => state.error;
