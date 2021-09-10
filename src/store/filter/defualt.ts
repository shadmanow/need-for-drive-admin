import { FilterState } from './types';

export const FilterStateDefault: FilterState = {
  filter: {
    type: 'any',
    predicate: () => true
  }
};
