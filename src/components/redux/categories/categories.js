import types from '../types/types';

// initial state
const initState = {
  categories: [],
};
// Actions Creators
export function addCategories() {
  return {
    type: types.CHECKED_BOOK_STATUS,
  };
}

const CategoriesReducer = (action, state = initState) => {
  switch (action.types) {
    case types.CHECKED_BOOK_STATUS:
      return {
        ...state,
        categories: [...state, 'Under Construction'],
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
