import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { playPause, nextSong, prevSong } from '../../redux/slices/playerSlice';
import Player from './Player';
import Controls from './Controls';
import SeekBar from './SeekBar';
import Volume from './Volume';

const MusicPlayer = () => {
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.3);
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
        <SeekBar
          activeSong={activeSong}
          seekTime={seekTime}
          onInput={(e) => setSeekTime(e.target.value)}
          max={duration}
          value={appTime}
        />
        <Volume
          min="0"
          max="1"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          setVolume={setVolume}
        />
        <Player
          activeSong={activeSong}
          isPlaying={isPlaying}
          currentIndex={currentIndex}
          seekTime={seekTime}
          onTimeUpdate={(e) => setAppTime(e.target.currentTime)}
          onLoadedData={(e) => setDuration(e.target.duration)}
          volume={volume}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
