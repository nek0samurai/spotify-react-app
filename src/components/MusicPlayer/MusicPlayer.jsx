// import {
//   BsFillPauseCircleFill,
//   BsFillSkipStartCircleFill,
//   BsFillSkipEndCircleFill,
//   BsFillPlayCircleFill,
// } from 'react-icons/bs';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { playPause } from '../../redux/slices/playerSlice';
import Player from './Player';

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, songsData, currentIndex } = useSelector((state) => state.player);

  useEffect(() => {
    if (songsData.length) dispatch(playPause(true));
  }, [currentIndex]);

  if (activeSong.error) return <h1>{activeSong.error.message}</h1>;

  return (
    <>
      <Player activeSong={activeSong} isPlaying={isPlaying} currentIndex={currentIndex} />
    </>
  );
};

export default MusicPlayer;
