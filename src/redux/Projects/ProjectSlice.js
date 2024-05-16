import { createSlice } from '@reduxjs/toolkit';
import * as API from './operations.js';

const initialState = {
  projects: null,
  project: null,
};

const handlePending = state => {};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(API.getAllProjects.pending, handlePending)
      .addCase(API.getAllProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
        // console.log('fulfilled');
      })
      .addCase(API.getAllProjects.rejected, (state, action) => {
        console.log(state, action);
      })
      .addCase(API.createNewProject.pending, (state, action) => {})
      .addCase(API.createNewProject.fulfilled, (state, action) => {
        state.project = action.payload;
      })
      .addCase(API.createNewProject.rejected, (state, action) => {
        console.log(action, 'REJECTED');
      });
  },
});

export const projectReducer = projectSlice.reducer;
