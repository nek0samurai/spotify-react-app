/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

import PlayPause from '../../PlayPause/PlayPause';

import { useDispatch } from 'react-redux';

import { playPause, setActiveSong } from '../../../redux/slices/playerSlice';

const MusicCard = ({ song, isPlaying, activeSong, songsData, i, isActive }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  console.log(song);

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, songsData, i }));
    dispatch(playPause(true));
  };

  return (
    <>
      <div key={song.id} className={activeSong.id === songsData[i].id ? 'card active' : 'card'}>
        <div className="card__main">
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
          <p className="card__info">
            {i + 1}. {song.title}
          </p>
        </div>
        <Link to={`${song.artist.id}`} className="card__artist">
          <p className="card__artist-item">{song.artist.name}</p>
        </Link>
        <div className="card__album">
          <p>{song.album.title}</p>
        </div>
      </div>
    </>
  );
};

export default MusicCard;
