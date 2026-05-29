import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
  name: 'session',
  initialState: { authedUser: null, darkMode: false },
  reducers: {
    login: (state, action) => { state.authedUser = action.payload; },
    logout: (state) => { state.authedUser = null; },
    toggleDarkMode: (state) => { state.darkMode = !state.darkMode; },
  },
});

export const { login, logout, toggleDarkMode } = sessionSlice.actions;
export default sessionSlice.reducer;
