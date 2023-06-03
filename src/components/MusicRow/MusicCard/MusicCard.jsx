/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

import PlayPause from '../../PlayPause/PlayPause';

import { useDispatch } from 'react-redux';
import { getActiveSong } from '../../../redux/actions/playerActions';
import { playPause } from '../../../redux/slices/playerSlice';
import { useState, useEffect } from 'react';

const MusicCard = ({ songsData, isPlaying, activeSong }) => {
  const [handleId, setHandleId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {}, [handleId, dispatch]);

  const handlePlayClick = () => {
    dispatch(getActiveSong(handleId));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <>
      {songsData?.map((item) => {
        return (
          <div key={item.id} className="card">
            <div className="card__img" onClick={() => setHandleId(item.id)}>
              <img src={item.album.cover_medium} alt="" className="card__cover" />
              <div className="card__img-controls">
                <PlayPause
                  id={item.id}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  handlePause={handlePauseClick}
                  handlePlay={handlePlayClick}
                />
              </div>
            </div>
            <h3 className="card__info">{item.title} </h3>
            <Link to={`${item.artist.id}`}>
              <p className="card__artist">{item.artist.name}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default MusicCard;
