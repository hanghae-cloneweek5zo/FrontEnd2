import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { Detail: [], is_loaded: false };
const URL = process.env.REACT_APP_URL;

export const DetailThunk = createAsyncThunk(
  'Detail/DetailThunk',
  async (payload, thunkAPI) => {
    const HouseDetail = await axios
      .get(`${URL}/houses/${payload.id}`)
      .then((res) => res.data.data);

    return thunkAPI.fulfillWithValue(HouseDetail);
  }
);

const DetailSlice = createSlice({
  name: 'Detail',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(DetailThunk.fulfilled, (state, action) => {
      state.is_loaded = true;
      state.Detail = action.payload;
    });
  },
});

export default DetailSlice.reducer;
