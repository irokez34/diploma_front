import { configureStore } from '@reduxjs/toolkit';
import { attachReducer } from './Attach/AttachSlice.js';

const reducer = {
  attach: attachReducer,
};

export const store = configureStore({ reducer });
