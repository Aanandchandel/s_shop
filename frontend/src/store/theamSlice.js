import { createSlice } from '@reduxjs/toolkit';

// Define the slice with initial state and reducers
const themeSlice = createSlice({
  name: 'theme', 
  initialState: {
    backgroundColor: 'black',
    color: 'wheat',
  },
  reducers: {
    // Reducer to apply dark theme
    dark: (state) => {
      state.backgroundColor = 'black';
      state.color = 'wheat';
    },
    // Reducer to apply light theme
    light: (state) => {
      state.backgroundColor = 'wheat';
      state.color = 'black';
    },
  },
});

// Export the actions
export const { dark, light } = themeSlice.actions;

// Export the reducer 
export default themeSlice.reducer;
