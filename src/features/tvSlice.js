import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const readTv = createAsyncThunk("tv/readTv", async () => {
   const response = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=84648c1d2dece9e696e82e12c46b738e&language=en-US&page=1');
   return response.data.results;
});

const tvEntity = createEntityAdapter({
   selectId: (tv) => tv.id
});


const tvSlice = createSlice({
   name : 'tv',
   initialState : tvEntity.getInitialState(),
   extraReducers : {
      [readTv.fulfilled] : (state, action) => {
         tvEntity.setAll(state, action.payload);
      }
   }
});


export const tvSelectors = tvEntity.getSelectors(state => state.tv);
export default tvSlice.reducer;