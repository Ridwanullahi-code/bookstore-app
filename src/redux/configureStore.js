import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './features/bookSlicer';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
  },
});
export default store;
