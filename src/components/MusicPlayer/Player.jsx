/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';

const Player = ({ activeSong, isPlaying, seekTime, onTimeUpdate, onLoadedData, volume }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

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
    <audio
      src={activeSong.preview}
      ref={ref}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}></audio>
  );
};

export default Player;
