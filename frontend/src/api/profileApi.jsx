// userApi.js
import axios from 'axios';
import { setUserData } from '../features/Slices/userSlices/UserSlice';

export const fetchUserData = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:4000/api/users/user-profile');
    dispatch(setUserData(response.data));
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
