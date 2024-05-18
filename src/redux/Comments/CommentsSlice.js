import { createSlice } from '@reduxjs/toolkit';
import * as API from './operations.js';

const initialState = {
  attachments: [],
  commentData: null,
};
const handlePending = state => {
  state.isLoading = true;
};
const attachSlice = createSlice({
  name: 'attach',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(API.getComments.pending, handlePending)
      .addCase(API.getComments.fulfilled, (state, { payload }) => {
        state.commentData = payload;
      })
      .addCase(API.getComments.rejected, (state, action) => {
        console.log(state, action);
      });
  },
});

export const attachReducer = attachSlice.reducer;
