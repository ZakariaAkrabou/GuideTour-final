import { combineReducers, configureStore } from '@reduxjs/toolkit';
import campingSlice from './campingSlice';
import userProfileSlice from './userProfileSlice';

const rootReducer = combineReducers({
  campings: campingSlice,
  users: userProfileSlice,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;