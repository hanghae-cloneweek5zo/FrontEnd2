import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { Review: [] };
const URL = process.env.REACT_APP_URL


export const ReviewThunk = createAsyncThunk(
    'Review/ReviewThunk',
    async (payload, thunkAPI) => {
        
      const HouseList = await axios
        .get(`${URL}/houses`)
        .then((res) =>res.data.data);
  
      return thunkAPI.fulfillWithValue(HouseList);
    }
  );


const ReviewSlice = createSlice({
    name: 'Review',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(ReviewThunk.fulfilled, (state, action) => {
        state.Review = action.payload
      });
    },
  });

  export default ReviewSlice.reducer;