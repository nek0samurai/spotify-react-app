import { useGetSongByNameQuery } from '../../redux/services/spotifyApi';
import { useState, useEffect } from 'react';

import MusicCard from './MusicCard/MusicCard';

const MusicRow = ({ songsData }) => {
  console.log(songsData);

  return (
    <div className="App">
      <h1 className="main-title">Results of {songsData.query} </h1>
      <div className="row">
        {!songsData ? (
          <>Oh no</>
        ) : songsData ? (
          <>
            <div className="card-row">
              <MusicCard props={songsData} />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MusicRow;
