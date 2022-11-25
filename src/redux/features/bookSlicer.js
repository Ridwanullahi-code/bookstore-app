import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
//https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/
// base url
const baseUrl = "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi";
const url = `${baseUrl}/apps/FIAzQhOtaqG2b6MuYF53/books`;

const initState = {
  books: [],
  loading:false,
}

export const getBooks = createAsyncThunk(
  // action type string
  'books/getBooks',
  //callback function
  async () => {
       const response = await axios.get(url);
       return response.data;
    //  catch (error) {
    //   thunkAPI.rejectWithValue(error.res.data);
    // }
  }
); 

const bookSlice = createSlice({
  name: "books",
  initState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state,action) => {
      state.loading = false;
      state.books = action.payload;
    },
    // [fetch.rejected]: (state) => {
    //   state.loading = false;
    // },
  },
});

export default bookSlice.reducer;
