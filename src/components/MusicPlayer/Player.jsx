/* eslint-disable react/prop-types */
import { useRef } from 'react';

const Player = ({ activeSong, isPlaying }) => {
  console.log(activeSong);
  const ref = useRef(null);

  if (ref.current) {
    if (!isPlaying) {
      ref.current.pause();
    } else {
      setTimeout(() => {
        ref.current.play();
      }, 150);
    }
  }

  return <audio src={activeSong.preview} ref={ref}></audio>;
};

export default Player;
