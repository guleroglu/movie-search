import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "./services/movies";
import moviesReducer from "./features/movieSlice";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    movies: moviesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);

export default store;
