import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './user/reducer';
import { loadingReducer } from './loading/reducer';
import { alertReducer } from './alert/reducer';
import { ordersReducer } from './order/reducer';
import { filterReducer } from './filter/reducer';
import { citiesReducer } from './city/reducer';
import { carsReducer } from './car/reducer';
import { errorReducer } from './error/reducer';

export const store = createStore(
  combineReducers({
    ui: combineReducers({
      loading: loadingReducer,
      alert: alertReducer
    }),
    auth: authReducer,
    orders: ordersReducer,
    filter: filterReducer,
    cities: citiesReducer,
    cars: carsReducer,
    error: errorReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
