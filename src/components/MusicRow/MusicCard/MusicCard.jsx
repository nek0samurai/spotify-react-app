/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

import PlayPause from '../../PlayPause/PlayPause';

import { useDispatch } from 'react-redux';
import { getActiveSong } from '../../../redux/actions/playerActions';
import { playPause, setActiveSong } from '../../../redux/slices/playerSlice';

const MusicCard = ({ song, isPlaying, activeSong, songsData, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, songsData, i }));
    dispatch(playPause(true));
  };

  return (
    <>
      <div key={song.id} className="card">
        <div className="card__img">
          <img src={song.album.cover_medium} alt="" className="card__cover" />
          <div className="card__img-controls">
            <PlayPause
              id={song.id}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          </div>
        </div>
        <h3 className="card__info">{song.title} </h3>
        <Link to={`${song.artist.id}`}>
          <p className="card__artist">{song.artist.name}</p>
        </Link>
      </div>
    </>
  );
};

export default MusicCard;
