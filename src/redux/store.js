import { configureStore } from '@reduxjs/toolkit';

// import { deezerApi } from './services/deezerApi';
import playerReducer from './slices/playerSlice';

export const store = configureStore({
  reducer: {
    // [deezerApi.reducerPath]: deezerApi.reducer,
    player: playerReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(deezerApi.middleware),
});
