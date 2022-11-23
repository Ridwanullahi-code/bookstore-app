import types from '../types/types';

// initial state
const initState = {
  categories: [],
};
// Actions Creators
export function checkBookStatus() {
  return {
    type: types.CHECKED_BOOK_STATUS,
  };
}

const CategoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHECKED_BOOK_STATUS:
      return {
        ...state,
        categories: [...state.categories, 'Under Construction'],
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
