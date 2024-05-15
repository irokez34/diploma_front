import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

/////
export const sendAttach = createAsyncThunk(
  'attachments',
  async (userData, thunkApi) => {
    try {
      const token = localStorage.getItem('token');
      const project_id = userData.project_id
      const response = await axios.post(
        `/api/attachments${project_id}`,
        userData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `${token}`,
          },
        }
      );
      console.log(response);
      return response;
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
