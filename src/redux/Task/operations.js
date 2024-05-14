import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

export const getAllTask = createAsyncThunk(
  'user/tasks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/tasks/');
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error); //error.message
    }
  }
);

export const createNewTask = createAsyncThunk(
  'user/tasks',
  async (newTask, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/tasks/', newTask, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error); //error.message
    }
  }
);

export const getOneTask = createAsyncThunk(
  'user/tasks',
  async (task_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/tasks/', task_id);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error); //error.message
    }
  }
);

export const updateOneTask = createAsyncThunk(
  'user/tasks',
  async (task_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.put('/api/tasks/', task_id, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error); //error.message
    }
  }
);
