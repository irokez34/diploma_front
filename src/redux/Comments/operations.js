import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

export const getComments = createAsyncThunk(
  'comments',
  async (task_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/comments/${task_id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createComments = createAsyncThunk(
  'comments',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/comments/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editComments = createAsyncThunk(
  'comments',
  async (data, comment_id, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/comments/${comment_id}`, data);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteComments = createAsyncThunk(
  'comments',
  async (comment_id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/comments/${comment_id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
