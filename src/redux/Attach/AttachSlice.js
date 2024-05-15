import { createSlice } from '@reduxjs/toolkit';
import * as API from './operations.js';

const initialState = {
  user: {
    file: null,
  },
  response: null,
  isLoading: false,
};
const handlePending = state => {
  state.isLoading = true;
  console.log('pending');
};
const attachSlice = createSlice({
  name: 'attach',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(API.sendAttach.pending, handlePending)
      .addCase(API.sendAttach.fulfilled, (state, { payload }) => {
        state.response = payload;
        console.log('fulfilled');
      })
      .addCase(API.sendAttach.rejected, (state, action) => {
        console.log(state);
      });
  },
});

export const attachReducer = attachSlice.reducer;
