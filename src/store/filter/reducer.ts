import { FilterActionTypes, FilterState, SetFilterAction } from './types';
import { FilterStateDefault } from './defualt';

export const filterReducer = (
  state: FilterState = FilterStateDefault,
  action: SetFilterAction
): FilterState => {
  switch (action.type) {
    case FilterActionTypes.SET_FILTER:
      return { filter: action.payload };
    default:
      return state;
  }
};
