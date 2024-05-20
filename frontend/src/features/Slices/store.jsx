import { combineReducers, configureStore } from '@reduxjs/toolkit';
import campingSlice from './campingSlice';
import userProfileSlice from './userProfileSlice';
import guideSlice from './guideSlice';
import tourSlice from './tourSlice'
import infoguideReducer from './infoguideSlice'


const rootReducer = combineReducers({
  campings: campingSlice,
  users: userProfileSlice,
  guides: guideSlice,
  tours: tourSlice,
  guide: infoguideReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;