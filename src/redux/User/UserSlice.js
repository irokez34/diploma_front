import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './operations.js';

const initialState = {
  token: null,
  userId: null,
  profile: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handleRegister = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
  state.isLoggedIn = true;
};
const handleLogin = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload;
  state.isLoggedIn = true;
};
const UserSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, handleRegister)
      .addCase(registerUser.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message;
      })

      .addCase(loginUser.fulfilled, handleLogin)
      .addCase(loginUser.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message;
      });
  },
});

export const userReducer = UserSlice.reducer;
