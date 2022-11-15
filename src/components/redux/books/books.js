import types from '../types/types';
// initial state
const initState = {
  books: [],
};
// Actions Creators
export function addBook(book) {
  return { type: types.BOOK_ADDED, book };
}

export function removeBook(book) {
  return { type: types.BOOK_REMOVED, book };
}

// Reducers Creator
const booksReducer = (action, state = initState) => {
  switch (action.type) {
    case types.BOOK_ADDED:
      return {
        ...state,
        books: [...state, action.book],
      };
    case types.BOOK_REMOVED:
      return {
        ...state,
        books: [...state.filter((book) => book.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default booksReducer;
