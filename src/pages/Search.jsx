import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetSongByNameQuery } from '../redux/services/spotifyApi';

import { useState } from 'react';
import MusicRow from '../components/MusicRow/MusicRow';

const Search = () => {
  const { term } = useParams();
  const { data, isFetching, error } = useGetSongByNameQuery(term);

  console.log(term);
  const [songsData, setSongsData] = useState();

  const songs = data?.tracks?.items.map((song) => song);

  useEffect(() => {
    setSongsData(songs);
  }, [data]);

  if (isFetching) return <h1>Searching {term}...</h1>;

  if (error) return <h1> Oh no</h1>;

  return <MusicRow songsData={songsData} />;
};

export default Search;
