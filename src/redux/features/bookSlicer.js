/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const url = `${baseUrl}/apps/FIAzQhOtaqG2b6MuYF53/books`;

const initialState = {
  books: [],
  loading: false,
};

export const getBooks = createAsyncThunk(
  // action type string
  'books/getBooks',
  // callback function
  async () => {
    const response = await axios.get(url);
    const { data } = response;
    const books = Object.entries(data).map(([key, value]) => {
      const { title, category, author } = value[0];
      return {
        itemId: key,
        title,
        category,
        author,
      };
    });
    return books;
  },
);

export const addBook = createAsyncThunk(
  'book/addBook',
  async (payload, thunkAPI) => {
    await axios.post(url, payload);
    return thunkAPI.dispatch(getBooks());
  },
);

export const deleteBook = createAsyncThunk(
  'book/deleteBook',
  async (id, thunkAPI) => {
    await axios.delete(`${url}/${id}`);
    return thunkAPI.dispatch(getBooks());
  },
);
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [fetch.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default bookSlice.reducer;
