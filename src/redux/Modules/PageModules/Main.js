import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { data: {} };


export const MainThunk = createAsyncThunk(
    'Main/MainThunk',
    async (payload, thunkAPI) => {
      const HouseList = await axios
        .post('http://3.34.126.243/house')
        .then((res) => res.data.data);
  
      return thunkAPI.fulfillWithValue(HouseList);
    }
  );


const MainSlice = createSlice({
    name: 'Main',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(MainThunk.fulfilled, (state, action) => {});
    },
  });

  export default MainSlice.reducer;