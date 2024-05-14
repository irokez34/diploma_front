import { configureStore } from '@reduxjs/toolkit';
import { attachReducer } from './Attach/AttachSlice.js';
import { userReducer } from './User/UserSlice.js';


const reducer = {
  attach: attachReducer,
  user: userReducer,
};

export const store = configureStore({ reducer });
