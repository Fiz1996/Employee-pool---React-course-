import { configureStore } from '@reduxjs/toolkit';
import pollsReducer from '../features/pollsSlice.js';
import sessionReducer from '../features/sessionSlice.js';

export const store = configureStore({
  reducer: {
    polls: pollsReducer,
    session: sessionReducer,
  },
});
