/* eslint-disable react/prop-types */
import { useRef } from 'react';

const Player = ({ activeSong, isPlaying }) => {
  const ref = useRef(null);
  console.log(ref.current);

  if (ref.current) {
    if (!isPlaying) {
      ref.current.pause();
    } else {
      setTimeout(() => {
        ref.current.play();
      }, 150);
    }
  }

  return (
    <div>
      <audio src={activeSong.preview} ref={ref}></audio>
    </div>
  );
};

export default Player;
