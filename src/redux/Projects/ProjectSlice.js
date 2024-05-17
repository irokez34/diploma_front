import { createSlice } from '@reduxjs/toolkit';
import * as API from './operations.js';

const initialState = {
  allProjects: null,
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
        state.allProjects = action.payload;
      })
      .addCase(API.getAllProjects.rejected, (state, action) => {
        console.log(state, action);
      })
      .addCase(API.createNewProject.pending, (state, action) => {})
      .addCase(API.createNewProject.fulfilled, (state, action) => {
        state.project = action.payload.data;
      })
      .addCase(API.createNewProject.rejected, (state, action) => {
        console.log(action, 'REJECTED');
      })
      .addCase(API.getOneProject.pending, (state, action) => {})
      .addCase(API.getOneProject.fulfilled, (state, action) => {
        state.project = action.payload;
      })
      .addCase(API.getOneProject.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export const projectReducer = projectSlice.reducer;
