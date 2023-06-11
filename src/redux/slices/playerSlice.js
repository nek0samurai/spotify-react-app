import { createSlice } from '@reduxjs/toolkit';

import { fetchMusic, getCurrentArtist, getActiveSong } from '../actions/playerActions';

const initialState = {
  songsData: [],
  currentArtist: [],

  currentIndex: 0,
  activeSong: {},
  isPlaying: false,
  isActive: false,
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
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.isActive = true;
      state.currentIndex = action.payload.i;
    },
    setCurrentArtist: (state, action) => {
      state.currentArtist = state.songsData.artist;
    },
    nextSong: (state, action) => {
      state.activeSong = state.songsData[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
    },
    prevSong: (state, action) => {
      state.activeSong = state.songsData[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
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
      });
    // .addCase(getCurrentArtist.fulfilled, (state, action) => {
    //   state.currentArtist = action.payload;

    //   state.isLoading = false;
    //   state.error = '';
    // })
    // .addCase(getCurrentArtist.pending, (state) => {
    //   state.currentArtist = [];
    //   state.isLoading = true;
    //   state.error = '';
    // })
    // .addCase(getCurrentArtist.rejected, (state, action) => {
    //   state.error = action.payload;
    //   state.isLoading = false;
    //   state.currentArtist = [];
    // })
    // .addCase(getActiveSong.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getActiveSong.fulfilled, (state, action) => {
    //   state.activeSong = action.payload;
    //   state.currentSongId = action.payload.id;
    //   state.isLoading = false;
    //   state.isPlaying = true;
    //   state.error = '';
    // })
    // .addCase(getActiveSong.rejected, (state, action) => {
    //   state.activeSong = {};
    //   state.currentSongId = 0;
    //   state.isLoading = false;
    //   state.error = action.payload.error;
    // });
  },
});

export const { setSongsData, playPause, setActiveSong, nextSong, prevSong } = playerSlice.actions;

export default playerSlice.reducer;
