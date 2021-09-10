export interface Filter {
  type: string;
  predicate: (object: any) => boolean;
}

export interface FilterState {
  readonly filter: Filter;
}

export enum FilterActionTypes {
  SET_FILTER = 'SET_FILTER'
}

export interface SetFilterAction {
  type: FilterActionTypes.SET_FILTER;
  payload: Filter;
}
