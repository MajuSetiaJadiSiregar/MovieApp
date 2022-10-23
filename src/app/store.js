import {configureStore} from '@reduxjs/toolkit';
import movieReducer from '../features/movieSlice';
import tvReducer from '../features/tvSlice';

export const store = configureStore({
   reducer : {
      movie : movieReducer,
      tv : tvReducer
   }
});