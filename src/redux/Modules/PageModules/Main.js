import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { Main: [],Category: [] };
const URL = process.env.REACT_APP_URL;

export const MainThunk = createAsyncThunk(
  'Main/MainThunk',
  async (payload, thunkAPI) => {
    const HouseList = await axios
      .get(`${URL}/houses/categories`)
      .then((res) => res.data.data);
    return thunkAPI.fulfillWithValue(HouseList);
  }
);

export const FilterThunk = createAsyncThunk(
  'Filter/FilterThunk',
  async (payload, thunkAPI) => {
    const FilterList = await axios
      .post(`${URL}/houses/filter`,payload)
      .then((res) => res.data.data);
    return thunkAPI.fulfillWithValue(FilterList);
  }
);
export const CategoryThunk = createAsyncThunk(
  'Category/CategoryThunk',
  async (payload, thunkAPI) => {
    const Category = await axios
      .get(`${URL}/houses/categories/${payload.homeCategory}`)
      .then((res) => res.data.data);
    return thunkAPI.fulfillWithValue(Category);
  }
);

export const HeartListThunk = createAsyncThunk(
  'HeartList/HeartListThunk',
  async (payload, thunkAPI) => {
    // const HeartList = await axios
    //   .get(`${URL}/houses/categories/${payload.homeHeartList}`)
    //   .then((res) => res.data.data);
    return 
    // thunkAPI.fulfillWithValue(HeartList);
  }
);

const MainSlice = createSlice({
  name: 'Main',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(MainThunk.fulfilled, (state, action) => {
      state.Main = action.payload;
    });
    builder.addCase(FilterThunk.fulfilled, (state, action) => {

      state.Category = action.payload;
    });
    builder.addCase(CategoryThunk.fulfilled, (state, action) => {

      state.Category = action.payload;
    })
  },
});

export default MainSlice.reducer;
