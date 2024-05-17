import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

export const getAllTask = createAsyncThunk(
  'user/tasks',
  async (project_id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/tasks/', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        params: { project_id },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error); //error.message
    }
  }
);
// add headers  Authorization: `${token}`,

export const createNewTask = createAsyncThunk(
  'user/tasks',
  async (newTask, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.post('/api/tasks/', newTask, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
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
      const token = localStorage.getItem('token');
      const { data } = await axios.get(`/api/tasks/${task_id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      });
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
      const token = localStorage.getItem('token');
      const { data } = await axios.put('/api/tasks/', task_id, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
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

export const deleteOneTask = createAsyncThunk('');
