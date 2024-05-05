import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './campingSlice';

const store = configureStore({
  reducer: rootReducer,
});

export default store;