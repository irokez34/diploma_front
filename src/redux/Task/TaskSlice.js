import { createSlice } from '@reduxjs/toolkit';
import * as API from './operations.js';

const initialState = {
  tasks: null,
  task: null,
};

const TaskSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(API.getAllTask.pending, (state, action) => {})
      .addCase(API.getAllTask.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(API.getAllTask.rejected, (state, action) => {});
  },
});

export const taskReducer = TaskSlice.reducer;
