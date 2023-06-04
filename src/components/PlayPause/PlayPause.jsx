/* eslint-disable react/prop-types */

import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, handlePause, handlePlay, activeSong, song }) => {
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle onClick={handlePause} className="icon" />
  ) : (
    <FaPlayCircle onClick={handlePlay} className="icon" />
  );
};

export default PlayPause;
