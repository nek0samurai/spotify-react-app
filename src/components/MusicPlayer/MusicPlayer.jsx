import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { playPause, nextSong, prevSong } from '../../redux/slices/playerSlice';
import Player from './Player';
import Controls from './Controls';
import SeekBar from './SeekBar';
import Volume from './Volume';

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, songsData, currentIndex, isActive } = useSelector(
    (state) => state.player,
  );

  useEffect(() => {
    if (songsData.length) dispatch(playPause(true));
  }, [currentIndex]);

  if (activeSong.error) return <h1>{activeSong.error.message}</h1>;

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(nextSong(currentIndex + 1));
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(songsData.length - 1));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  return (
    <div className="player">
      <div className="player-bottom">
        <Controls
          songsData={songsData}
          currentIndex={currentIndex}
          handleNextSong={handleNextSong}
          handlePrevSong={handlePrevSong}
          isPlaying={isPlaying}
          isActive={isActive}
          handlePlayPause={handlePlayPause}
        />
        <SeekBar activeSong={activeSong} />
        <Volume />
        <Player activeSong={activeSong} isPlaying={isPlaying} currentIndex={currentIndex} />
      </div>
    </div>
  );
};

export default MusicPlayer;
