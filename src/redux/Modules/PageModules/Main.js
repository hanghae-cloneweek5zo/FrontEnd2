import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { Main: [] };
const URL = process.env.REACT_APP_URL


export const MainThunk = createAsyncThunk(
    'Main/MainThunk',
    async (payload, thunkAPI) => {
        
      const HouseList = await axios
        .get(`${URL}/houses`)
        .then((res) =>res.data.data);
  
      return thunkAPI.fulfillWithValue(HouseList);
    }
  );


const MainSlice = createSlice({
    name: 'Main',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(MainThunk.fulfilled, (state, action) => {
        state.Main = action.payload
      });
    },
  });

  export default MainSlice.reducer;