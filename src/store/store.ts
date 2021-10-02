import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './user/reducer';
import { loadingReducer } from './loading/reducer';
import { alertReducer } from './alert/reducer';

export const store = createStore(
  combineReducers({
    ui: combineReducers({
      loading: loadingReducer,
      alert: alertReducer
    }),
    auth: authReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
