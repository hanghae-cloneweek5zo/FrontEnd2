// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   ALLHOMES: [],
//   FANCY: [],
//   NATIONAL_PARK: [],
//   SHACK: [],
//   ISLE: [],
//   OCEAN: [],
//   COMPACT: [],
//   DESIGNED: [],
//   CAMPSITE: [],
//   A_SHAPED: [],
//   LAKE: [],
//   ARCTIC: [],
//   FILTER: [],
// };
// const URL = process.env.REACT_APP_URL;

// export const CategoryThunk = createAsyncThunk(
//   'Category/CategoryThunk',
//   async (payload, thunkAPI) => {
//     const Category = await axios
//       .get(`${URL}/houses/categories/${payload.homeCategory}`)
//       .then((res) => res.data.data);
//     return thunkAPI.fulfillWithValue({Category:Category,num:payload.category,name:payload.homeCategory});
//   }
// );

// const CategorySlice = createSlice({
//   name: 'category',
//   initialState: initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(CategoryThunk.fulfilled, (state, action) => {
//       // console.log(action.payload.Category,action.payload.num)
//       // console.log(initialState.action.payload.name)
//       // state.Category = action.payload;
//     });
//   },
// });

// export default CategorySlice.reducer;
