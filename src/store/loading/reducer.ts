import { LoadingStateDefault } from './default';
import { LoadingState, LoadingAction, LoadingActionTypes } from './types';

export const loadingReducer = (
  state: LoadingState = LoadingStateDefault,
  action: LoadingAction
): LoadingState => {
  switch (action.type) {
    case LoadingActionTypes.LOADING_START:
      return { loading: [...state.loading, action.loading] };
    case LoadingActionTypes.LOADING_STOP:
      return {
        loading: state.loading.filter((loading) => loading !== action.loading)
      };
    default:
      return state;
  }
};
