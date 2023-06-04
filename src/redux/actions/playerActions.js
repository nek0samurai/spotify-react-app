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
      'X-RapidAPI-Key': 'ae48d365b4msh8d9458486f7aaa0p1e5ac0jsn588f6312a640',
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
    const options = {
      method: 'GET',
      url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`,
      headers: {
        'X-RapidAPI-Key': 'ae48d365b4msh8d9458486f7aaa0p1e5ac0jsn588f6312a640',
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
      'X-RapidAPI-Key': 'ae48d365b4msh8d9458486f7aaa0p1e5ac0jsn588f6312a640',
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
