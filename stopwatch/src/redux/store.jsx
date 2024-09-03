import { configureStore } from '@reduxjs/toolkit';
import stopwatchReducer from './slice/timeSlice';

export const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer,
  },
});
