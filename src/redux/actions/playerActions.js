import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.deezer.com';

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

export const getTopArtistTracks = createAsyncThunk(
  'player/getTopArtistTracks',
  async (url, thunkAPI) => {
    // console.log(url.slice(0, -2));
    const newUrl = url.slice(0, -2) + '10';
    // const options = {
    //   method: 'OPTIONS',
    //   url: `${url}`,
    //   headers: {
    //     'Access-Control-Allow-Origin': `${url}`,
    //   },
    // };
    try {
      const response = await axios.get(newUrl);
      return response.data;
    } catch (err) {
      const message = (err.response && err.response.data) || err.message;
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const getActiveSong = createAsyncThunk('player/activeSong', async (url, thunkAPI) => {
  console.log(url);
  const options = {
    method: 'GET',
    url: `${url}`,

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
