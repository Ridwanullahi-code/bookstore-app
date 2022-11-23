import types from '../types/types';
// initial state
const initState = {
  noOfBooks: 3,
  books: [
    { id: 1, title: 'Game of throne', author: 'Micheal' },
    { id: 2, title: 'The man call god', author: 'James' },
    { id: 3, title: 'A life of single man', author: 'Derrick' },
  ],
};
// Actions Creators
export function addBook(newBook) {
  return { type: types.BOOK_ADDED, newBook };
}

export function removeBook(id) {
  return { type: types.BOOK_REMOVED, id };
}

// Reducers Creator
const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case types.BOOK_ADDED:
      return {
        ...state,
        noOfBooks: state.noOfBooks + 1,
        books: [...state.books, action.newBook],
      };
    case types.BOOK_REMOVED:
      return {
        ...state,
        noOfBooks: state.noOfBooks - 1,
        books: [...state.books.filter((book) => book.id !== action.id)],
      };
    default:
      return state;
  }
};

export default booksReducer;
