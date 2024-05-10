import { configureStore } from '@reduxjs/toolkit';
import campingSlice from './campingSlice';
import userProfile from './userProfileSlice'

const store = configureStore({

  reducer:{
    campings: campingSlice,
    // users: userProfile,

  }
});

export default store;