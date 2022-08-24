import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  ALLHOMES: [],
  FANCY: [],
  NATIONAL_PARK: [],
  SHACK: [],
  ISLE: [],
  OCEAN: [],
  COMPACT: [],
  DESIGNED: [],
  CAMPSITE: [],
  A_SHAPED: [],
  LAKE: [],
  ARCTIC: [],
};
const URL = process.env.REACT_APP_URL;

export const CategoryThunk = createAsyncThunk(
  'Category/CategoryThunk',
  async (payload, thunkAPI) => {
    console.log(payload);
    const Category = await axios
      .get(`${URL}/houses/categories/${payload}`)
      .then((res) => console.log(res));
    return payload;
    // thunkAPI.fulfillWithValue(Category);
  }
);

const CategorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CategoryThunk.fulfilled, (state, action) => {
      state.Category = action.payload;
    });
  },
});

export default CategorySlice.reducer;
