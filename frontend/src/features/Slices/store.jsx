import { configureStore } from '@reduxjs/toolkit';
import campingSlice from './campingSlice';
import userProfile from './userProfileSlice'

const store = configureStore({
  // reducer: campingSlice,
  reducer: userProfile,
});

export default store;