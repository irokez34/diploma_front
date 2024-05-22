import { createSlice } from '@reduxjs/toolkit';
import * as API from './operations.js';

const initialState = {
  allProjects: null,
  project: null,
  history: null,
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
        state.allProjects.push(action.payload.data);
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
      })
      .addCase(API.updateProject.pending, (state, action) => {})
      .addCase(API.updateProject.fulfilled, (state, action) => {
        // state.project = action.payload;
        console.log(action);
      })
      .addCase(API.updateProject.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(API.getHistoryProject.pending, (state, action) => {})
      .addCase(API.getHistoryProject.fulfilled, (state, action) => {
        // state.project = action.payload;
        state.history = action.payload;
      })
      .addCase(API.getHistoryProject.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export const projectReducer = projectSlice.reducer;
