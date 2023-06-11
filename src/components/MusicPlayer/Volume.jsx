/* eslint-disable react/prop-types */

import { BsFillVolumeUpFill, BsFillVolumeDownFill, BsVolumeMuteFill } from 'react-icons/bs';
const Volume = ({ value, onChange, setVolume, min, max }) => {
  return (
    <div className="player-options">
      {value <= 1 && value > 0.5 && <BsFillVolumeUpFill onClick={() => setVolume(0)} />}
      {value <= 0.5 && value > 0 && <BsFillVolumeDownFill onClick={() => setVolume(0)} />}
      {value == 0 && <BsVolumeMuteFill onClick={() => setVolume(1)} />}
      <input
        className="player-options__volume"
        type="range"
        step="any"
        min={min}
        max={max}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Volume;
