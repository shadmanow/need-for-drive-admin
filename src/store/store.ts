import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './user/reducer';
import { loadingsReducer } from './loadings/reducer';
import { alertReducer } from './alert/reducer';
import { ordersReducer } from './orders/reducer';
import { filterReducer } from './filter/reducer';
import { citiesReducer } from './cities/reducer';
import { carsReducer } from './cars/reducer';
import { errorReducer } from './error/reducer';
import { categoriesReducer } from './categories/reducer';
import { pointsReducer } from './points/reducer';
import { locationReducer } from './location/reducer';

export const store = createStore(
  combineReducers({
    ui: combineReducers({
      loadings: loadingsReducer,
      alert: alertReducer
    }),
    auth: authReducer,
    orders: ordersReducer,
    filter: filterReducer,
    cities: citiesReducer,
    cars: carsReducer,
    categories: categoriesReducer,
    points: pointsReducer,
    location: locationReducer,
    error: errorReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
