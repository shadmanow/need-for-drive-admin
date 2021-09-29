import { LoadingsStateDefault } from './default';
import { LoadingsState, LoadingsAction, LoadingsActionTypes } from './types';

export const loadingsReducer = (
  state: LoadingsState = LoadingsStateDefault,
  action: LoadingsAction
): LoadingsState => {
  switch (action.type) {
    case LoadingsActionTypes.LOADING_START:
      return { loadings: [...state.loadings, action.loading] };
    case LoadingsActionTypes.LOADING_STOP:
      return {
        loadings: state.loadings.filter(
          (loading) => loading.name !== action.loading.name
        )
      };
    default:
      return state;
  }
};
