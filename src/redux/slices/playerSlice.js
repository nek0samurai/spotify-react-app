import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songsData: [],
  currentArtist: [],
  nameOfSong: '',
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setSongsData: (state, action) => {
      state.songsData = action.payload?.tracks?.items;
    },
    setNameOfSong: (state, action) => {
      state.nameOfSong = action.payload.query;
    },
  },
});

export const { setNameOfSong, setSongsData } = playerSlice.actions;

export default playerSlice.reducer;
