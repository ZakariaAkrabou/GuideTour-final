import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    guides: [],
    error: '',
}


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('http://localhost:4000/api/admin/allUsers');
    return response.data;
  });

export const fetchGuides = createAsyncThunk('guides/fetchGuides', async () => {
  const response = await axios.get('http://localhost:4000/api/admin/allguides');
  return response.data;
});


const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
        state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
        state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.users = []
        state.error = action.error.message
  })

  // Reducers for fetching guides
  builder.addCase(fetchGuides.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(fetchGuides.fulfilled, (state, action) => {
    state.loading = false;
    state.guides = action.payload;
    state.error = '';
  });
  builder.addCase(fetchGuides.rejected, (state, action) => {
    state.loading = false;
    state.guides = [];
    state.error = action.error.message;
  });
}
});

export default usersSlice.reducer;