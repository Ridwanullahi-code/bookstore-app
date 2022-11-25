import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './features/bookSlicer';

// combine all reducers together
// const reducer = combineReducers({
//   categories: categoriesReducer,
//   fetchBooks: fetchReducer,
// });
// update state in store
const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
  },
});
export default store;
