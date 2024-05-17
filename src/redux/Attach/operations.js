import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

/////
export const sendAttach = createAsyncThunk(
  'attachments',
  async (userData, thunkApi) => {
    try {
      const token = localStorage.getItem('token');
      const project_id = userData.project_id;
      const response = await axios.post(
        `/api/attachments/${project_id}`,
        userData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `${token}`,
          },
        }
      );

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

export const getAttach = createAsyncThunk(
  'attachments',
  async (attachm_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/attachments/${attachm_id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteAttach = createAsyncThunk(
  'attachments',
  async (attachm_id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/attachments/${attachm_id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
