import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieData: [],
    nameQuery: "",
  },
  reducers: {
    setNameQuery: (state, action) => {
      state.nameQuery = action.payload;
    },
    setMovieData: (state, action) => {
      state.movieData = action.payload;
    },
  },
});

export const { setNameQuery, setMovieData } = moviesSlice.actions;
export default moviesSlice.reducer;
