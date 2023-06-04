// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const deezerCoreApi = createApi({
//   reducerPath: 'deezerCoreApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://deezerdevs-deezer.p.rapidapi.com/',
//     prepareHeaders: (headers) => {
//       headers.set({
//         'X-RapidAPI-Key': 'ae48d365b4msh8d9458486f7aaa0p1e5ac0jsn588f6312a640',
//         'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
//       });

//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getSongsBySearch: builder.query({
//       query: (searchTerm) => `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`,
//     }),
//     getActiveSong: builder.query({
//         query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
//       }),
//   }),
// });

// export const {
//   useGetTopChartsQuery,
//   useGetSongsByGenreQuery,
//   useGetSongsByCountryQuery,
//   useGetSongsBySearchQuery,
//   useGetArtistDetailsQuery,
//   useGetSongDetailsQuery,
//   useGetSongRelatedQuery,
// } = shazamCoreApi;
