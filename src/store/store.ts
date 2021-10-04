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
import {
  locationCityReducer,
  locationAddressReducer
} from './location/reducer';
import { currentPointReducer } from './current-point/reducer';
import { currentCarReducer } from './current-car/reducer';
import { currentOrderReducer } from './current-order/reducer';

export const store = createStore(
  combineReducers({
    ui: combineReducers({
      loadings: loadingsReducer,
      alert: alertReducer
    }),
    auth: authReducer,
    filter: filterReducer,
    cities: citiesReducer,
    orders: ordersReducer,
    currentOrder: currentOrderReducer,
    cars: carsReducer,
    currentCar: currentCarReducer,
    categories: categoriesReducer,
    points: pointsReducer,
    currentPoint: currentPointReducer,
    location: combineReducers({
      city: locationCityReducer,
      address: locationAddressReducer
    }),
    error: errorReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
