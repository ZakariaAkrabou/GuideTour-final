import { combineReducers, configureStore } from '@reduxjs/toolkit';
import campingSlice from './campingSlice';
import userProfileSlice from './userProfileSlice';
import guideSlice from './guideSlice';
import tourSlice from './tourSlice'
import authPasswordSlice from './authPasswordSlice';
import infoguideSlice from './infoguideSlice';
import bookingSlice from './bookingSlice';
import ordersSlice from './ordersSlice';

const rootReducer = combineReducers({
  campings: campingSlice,
  users: userProfileSlice,
  guides: guideSlice,
  tours: tourSlice,
  password: authPasswordSlice,
  guide: infoguideSlice,
  bookings: bookingSlice,
  orders: ordersSlice
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;