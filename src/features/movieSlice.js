import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
   name : 'movie', 
   initialState : {
      nama : 'maju',
      kelas : 'abc'
   }
});

export default movieSlice.reducer;