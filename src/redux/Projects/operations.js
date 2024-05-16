import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

// ///

export const getAllProjects = createAsyncThunk(
  'projects',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/projects/', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createNewProject = createAsyncThunk(
  'projects/create',
  async (userData, { rejectWithValue }) => {
    try {
      console.log(userData);
      const token = localStorage.getItem('token');
      const response = axios.post('/api/projects/', userData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneProject = createAsyncThunk(
  'projects/getOne',
  async (project_id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = axios.get(`/api/projects/${project_id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
