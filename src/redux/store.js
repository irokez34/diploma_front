import { configureStore } from '@reduxjs/toolkit';
import { attachReducer } from './Attach/AttachSlice.js';
import { userReducer } from './User/UserSlice.js';
import { projectReducer } from './Projects/ProjectSlice.js';

const reducer = {
  attach: attachReducer,
  user: userReducer,
  project: projectReducer,
};

export const store = configureStore({ reducer });
