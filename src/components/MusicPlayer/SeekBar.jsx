/* eslint-disable react/prop-types */
const SeekBar = ({ activeSong, onInput, value, max }) => {
  const time = Math.floor(value);

  return (
    <div className="player-track">
      <div className="track-container">
        <div className="track-heading">
          <span>{activeSong?.artist?.name} ·</span>
          <span> {activeSong.title}</span>
        </div>
        <div className="track-seekbar">
          <div className="track-slider">
            <input
              className="track-slider__input"
              value={value}
              type="range"
              name=""
              min="0"
              max={max}
              step="any"
              onInput={onInput}
            />
          </div>
          <p className="track-time">0:{time < 10 ? '0' + time : time}</p>
        </div>
      </div>
    </div>
  );
};

export default SeekBar;
