import { createSlice } from '@reduxjs/toolkit';

import { fetchMusic, getTopArtistTracks, getActiveSong } from '../actions/playerActions';
// ,
const initialState = {
  songsData: [],
  currentArtist: [],
  currentArtistTopTracks: [],
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
      state.currentArtist = action.payload;
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
      .addCase(getTopArtistTracks.fulfilled, (state, action) => {
        state.currentArtistTopTracks = action.payload.data;

        state.isLoading = false;
        state.error = '';
      })
      .addCase(getTopArtistTracks.pending, (state) => {
        state.currentArtistTopTracks = [];
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getTopArtistTracks.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.currentArtistTopTracks = [];
      })
      .addCase(getActiveSong.pending, (state) => {
        state.isLoading = true;
      });
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

export const { setSongsData, playPause, setActiveSong, nextSong, prevSong, setCurrentArtist } =
  playerSlice.actions;

export default playerSlice.reducer;
