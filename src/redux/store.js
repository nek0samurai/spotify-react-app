import { configureStore } from '@reduxjs/toolkit';

import { spotifyApi } from './services/spotifyApi';
import playerReducer from './slices/playerSlice';

export const store = configureStore({
  reducer: {
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware),
});
