import { GlobalAction, GlobalActionTypes, GlobalState } from './types';
import { GlobalStateDefault } from './default';

export const globalReducer = (
  state: GlobalState = GlobalStateDefault,
  action: GlobalAction
): GlobalState => {
  switch (action.type) {
    case GlobalActionTypes.START_LOADING:
      return { ...state, loading: true };

    case GlobalActionTypes.END_LOADING:
      return { ...state, loading: false };

    case GlobalActionTypes.SET_ERROR:
      return { ...state, error: action.payload };

    case GlobalActionTypes.CLEAR_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
};
