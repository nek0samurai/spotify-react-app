import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '6170838f77msh698f9c011dbf905p1a208bjsn4f95db7fd65d');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongByName: builder.query({
      query: (term) => `/search/?q=${term}&type=tracks&offset=0&limit=10&numberOfTopResults=5`,
    }),
    getArtistDetails: builder.query({
      query: (id) => `/artists/?id=${id}`,
    }),
  }),
});

export const { useGetSongByNameQuery, useGetArtistDetailsQuery } = spotifyApi;
