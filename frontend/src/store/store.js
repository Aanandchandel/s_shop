import { configureStore } from '@reduxjs/toolkit';
import theam from "./theamSlice"
const store = configureStore({
  reducer: {
    theamSlice:theam
    
  },
});

export default store;
