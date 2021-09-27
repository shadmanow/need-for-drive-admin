export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface CategoryState {
  readonly categories: Category[];
}

export enum CategoryActionTypes {
  SET_CATEGORIES = 'SET_CATEGORIES'
}

export interface SetCategoriesAction {
  type: CategoryActionTypes.SET_CATEGORIES;
  categories: Category[];
}
