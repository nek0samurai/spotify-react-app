// import {
//   BsFillPauseCircleFill,
//   BsFillSkipStartCircleFill,
//   BsFillSkipEndCircleFill,
//   BsFillPlayCircleFill,
// } from 'react-icons/bs';

import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import { playPause } from '../../redux/slices/playerSlice';

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, songsData, currentSongId } = useSelector((state) => state.player);
  const ref = useRef();

  useEffect(() => {
    if (songsData.length) dispatch(playPause(true));
  }, [dispatch, currentSongId]);

  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <div>
        <audio src={activeSong.preview} ref={ref}></audio>
      </div>
    </>
  );
};

export default MusicPlayer;
