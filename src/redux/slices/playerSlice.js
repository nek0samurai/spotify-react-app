import { createSlice } from '@reduxjs/toolkit';

import { fetchMusic, getCurrentArtist, getActiveSong } from '../actions/playerActions';

const initialState = {
  songsData: [],
  currentArtist: [],
  activeSong: {},
  isPlaying: false,
  isLoading: false,
  error: '',
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setSongsData: (state, action) => {
      state.songsData = action.payload?.data;
      state.isLoading = false;
      state.error = '';
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMusic.fulfilled, (state, action) => {
        state.songsData = [...action.payload.data];
        state.activeSong = {};
        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchMusic.pending, (state) => {
        state.songsData = [];
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchMusic.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.songsData = [];
      })
      .addCase(getCurrentArtist.fulfilled, (state, action) => {
        state.currentArtist = action.payload;

        state.isLoading = false;
        state.error = '';
      })
      .addCase(getCurrentArtist.pending, (state) => {
        state.currentArtist = [];
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getCurrentArtist.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.currentArtist = [];
      })
      .addCase(getActiveSong.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getActiveSong.fulfilled, (state, action) => {
        state.activeSong = action.payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getActiveSong.rejected, (state, action) => {
        state.activeSong = {};
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setSongsData, playPause } = playerSlice.actions;

export default playerSlice.reducer;
