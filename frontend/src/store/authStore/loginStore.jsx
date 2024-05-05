
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice'; // Import your authSlice reducer

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your authSlice reducer to the store
    // Add other reducers here if you have any
  },
  // Add any additional configurations here
});

export default store;
