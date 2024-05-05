import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        error: null,
    },
    reducers: {
        loginSuccess(state, action) {
            const { token, user } = action.payload;
            state.user = user;
            state.isAuthenticated = true;
            localStorage.setItem('token', token); 
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token'); 
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { loginSuccess, logout, setError } = authSlice.actions;

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
