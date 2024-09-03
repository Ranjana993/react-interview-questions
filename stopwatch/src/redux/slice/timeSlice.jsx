import { createSlice } from '@reduxjs/toolkit';

export const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState: {
    time: 0,
    isActive: false,
  },
  reducers: {
    startStop: (state) => {
      state.isActive = !state.isActive;
    },
    reset: (state) => {
      state.isActive = false;
      state.time = 0;
    },
    tick: (state) => {
      if (state.isActive) {
        state.time += 10;
      }
    },
  },
});

export const { startStop, reset, tick } = stopwatchSlice.actions;
export default stopwatchSlice.reducer;
