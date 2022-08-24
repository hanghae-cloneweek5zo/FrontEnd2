import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { Main: [] };
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
      .then((res) => console.log(res));
    return payload
    //  thunkAPI.fulfillWithValue(HouseList);
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
  },
});

export default MainSlice.reducer;
