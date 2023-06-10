/* eslint-disable react/prop-types */

import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';

const Controls = ({
  currentIndex,
  handleNextSong,
  handlePrevSong,
  isPlaying,
  isActive,
  handlePlayPause,
  songsData,
}) => {
  return (
    <div className="player-controls">
      <ul className="player-controls__icons">
        <li>{songsData?.length && <AiFillStepBackward onClick={handlePrevSong} />}</li>
        {isPlaying ? (
          <li>
            <BsPauseFill onClick={handlePlayPause} />
          </li>
        ) : (
          <li>
            <BsPlayFill onClick={handlePlayPause} />
          </li>
        )}
        <li>{songsData?.length && <AiFillStepForward onClick={handleNextSong} />}</li>
      </ul>
    </div>
  );
};

export default Controls;
