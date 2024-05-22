import { createSlice } from '@reduxjs/toolkit';
import * as API from './operations.js';

const initialState = {
  attachments: null,
  commentData: [],
};
const handlePending = state => {
  state.isLoading = true;
};
const commentSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(API.getComments.pending, handlePending)
      .addCase(API.getComments.fulfilled, (state, { payload }) => {
        state.commentData = [...payload];
        state.attachments = payload.attachments;
      })
      .addCase(API.getComments.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(API.createComments.pending, handlePending)
      .addCase(API.createComments.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.commentData.push(payload);
        // state.commentData = 
        // state.commentData = [...state.commentData, payload.data];
        // state.attachments = payload.attachments;
      })
      .addCase(API.createComments.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const commentReducer = commentSlice.reducer;
