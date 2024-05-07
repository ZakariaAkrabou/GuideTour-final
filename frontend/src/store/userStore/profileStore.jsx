// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../features/Slices/userSlices/UserSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
