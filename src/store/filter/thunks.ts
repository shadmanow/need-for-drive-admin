import { Dispatch } from 'redux';

import { Filter, FilterActionTypes, SetFilterAction } from './types';

const setFilterAction = (filter: Filter): SetFilterAction => ({
  type: FilterActionTypes.SET_FILTER,
  payload: filter
});

export const setFilter =
  (type: string, predicate: (object: any) => boolean) =>
  (dispatch: Dispatch<any>) =>
    dispatch(setFilterAction({ type, predicate }));
