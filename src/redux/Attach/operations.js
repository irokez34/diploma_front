import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

export const sendAttach = createAsyncThunk(
  'attachments',
  async (userData, thunkApi) => {
    try {
      const response = await axios.post('/api/attachments', userData);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      alert(message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
