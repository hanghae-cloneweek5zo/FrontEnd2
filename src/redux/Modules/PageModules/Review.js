import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { Review: [] };
const URL = process.env.REACT_APP_URL;

export const ReviewThunk = createAsyncThunk(
  'Review/ReviewThunk',
  async (payload, thunkAPI) => {
    return thunkAPI.fulfillWithValue(payload);
  }
);

const ReviewSlice = createSlice({
  name: 'Review',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ReviewThunk.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

export default ReviewSlice.reducer;
