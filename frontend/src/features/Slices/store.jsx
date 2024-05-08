import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './campingSlice';
import userReducer from '../../features/Slices/userSlices/UserSlice';

const store = configureStore({
  reducer: rootReducer,
  user: userReducer,
  
});

export default store;