import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './campingSlice';
import userProfile from './userProfileSlice'

const store = configureStore({
  reducer: rootReducer,
  reducer: userProfile,
});

export default store;