import axios from 'axios';

export const fetchUserProfile = axios.create({
  baseURL: 'http://localhost:4000/api/users/user-profile',
});

fetchUserProfile.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

