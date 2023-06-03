import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const URL = 'https://deezerdevs-deezer.p.rapidapi.com';

export const fetchMusic = createAsyncThunk('player/fetchedMusic', async (term, thunkAPI) => {
  console.log(term);
  const options = {
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/search`,
    params: { q: `${term}` },
    headers: {
      'X-RapidAPI-Key': '6170838f77msh698f9c011dbf905p1a208bjsn4f95db7fd65d',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    const message = (err.response && err.response.data) || err.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const getCurrentArtist = createAsyncThunk(
  'player/getCurrentArtist',
  async (id, thunkAPI) => {
    console.log(id);
    const options = {
      method: 'GET',
      url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`,
      headers: {
        'X-RapidAPI-Key': '6170838f77msh698f9c011dbf905p1a208bjsn4f95db7fd65d',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (err) {
      const message = (err.response && err.response.data) || err.message;
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const getActiveSong = createAsyncThunk('player/activeSong', async (id, thunkAPI) => {
  console.log(id);
  const options = {
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,

    headers: {
      'X-RapidAPI-Key': '6170838f77msh698f9c011dbf905p1a208bjsn4f95db7fd65d',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    const message = (err.response && err.response.data) || err.message;
    return thunkAPI.rejectWithValue(message);
  }
});
