import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light', // default theme
  themes: ['light', 'dark', 'blue', 'green', 'red'], // available themes
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
