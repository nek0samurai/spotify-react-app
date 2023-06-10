/* eslint-disable react/prop-types */
const SeekBar = ({ activeSong }) => {
  return (
    <div className="player-track">
      <div className="track-container">
        <div className="track-heading">
          <span>{activeSong?.artist?.name} ·</span>
          <span> {activeSong.title}</span>
        </div>
        <div className="track-seekbar">
          <div className="track-slider">
            <input className="track-slider__input" type="range" name="" min="0" max="30" step="1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeekBar;
