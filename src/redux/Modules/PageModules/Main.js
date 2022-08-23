import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { Main: [] };

export const MainThunk = createAsyncThunk(
  'Main/MainThunk',
  async (payload, thunkAPI) => {
    const HouseList = await axios
      .get('http://3.39.10.121/houses')
      .then((res) => res.data.data);
    return thunkAPI.fulfillWithValue(HouseList);
  }
);

const MainSlice = createSlice({
  name: 'Main',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(MainThunk.fulfilled, (state, action) => {
      console.log(action);
      state.Main = action.payload;
    });
  },
});

export default MainSlice.reducer;
