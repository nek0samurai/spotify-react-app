/* eslint-disable react/prop-types */

import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, handlePause, handlePlay, id, activeSong }) =>
  isPlaying && id === activeSong.id ? (
    <FaPauseCircle onClick={handlePause} className="icon" />
  ) : (
    <FaPlayCircle onClick={handlePlay} className="icon" />
  );

export default PlayPause;
