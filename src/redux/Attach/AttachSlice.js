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
};
const attachSlice = createSlice({
  name: 'attach',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(API.sendAttach.pending, handlePending)
      .addCase(API.sendAttach.fulfilled, (state, { payload }) => {
        state.response = payload;
      })
      .addCase(API.sendAttach.rejected, (state, action) => {
        console.log(state, action);
      });
  },
});

export const attachReducer = attachSlice.reducer;
