import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const readMovie = createAsyncThunk("movie/readMovie", async () => {
   const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=84648c1d2dece9e696e82e12c46b738e&language=en-US&page=1');
   console.log(response.data.results);
   return response.data.results;
});

const movieEntity = createEntityAdapter({
   selectId: (movie) => movie.id
});


const movieSlice = createSlice({
   name : 'movie',
   initialState : movieEntity.getInitialState(),
   extraReducers : {
      [readMovie.fulfilled] : (state, action) => {
         movieEntity.setAll(state, action.payload);
      }
   }
});


export const movieSelectors = movieEntity.getSelectors(state => state.movie);
export default movieSlice.reducer;