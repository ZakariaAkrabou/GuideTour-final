import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/userSlices'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;