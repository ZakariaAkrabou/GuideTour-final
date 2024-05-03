import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    loading: false,
    campings: [],
    campingID: [],
    error: '',
}

export const fetchCampings = createAsyncThunk('users/fetchCampings', async ()  => {


    const response = await axios.get('http://localhost:4000/api/camping/show')
    return response.data;
})

export const fetchCampingsById = createAsyncThunk('users/fetchCampingsById',async (campingId) => {
      const response = await axios.get(`http://localhost:4000/api/camping/get/${campingId}`);
      return response.data;
    }
  )

const campingSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCampings.pending, (state) => {
            state.loading = true;
        });
    
        builder.addCase(fetchCampings.fulfilled, (state, action) => {
            state.loading = false;
            state.campings = action.payload;
            console.log("campings", state.campings);
            state.error = '';
        });
    
        builder.addCase(fetchCampings.rejected, (state, action) => {
            state.loading = false;
            state.campings = [];
            state.error = action.error.message;
        });

        builder.addCase(fetchCampingsById.fulfilled, (state, action) => {
            state.loading = false;
            state.campingID = action.payload; 
            state.error = '';
          });
    }
})

export default campingSlice.reducer;