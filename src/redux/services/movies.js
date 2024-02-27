import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../utils/constans";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_API_URL}` }),
  endpoints: (builder) => ({
    getMovieByName: builder.query({
      query: (name) => `search/movie?query=${name}&api_key=${apiKey}`,
    }),
  }),
});

export const { useGetMovieByNameQuery } = moviesApi;
