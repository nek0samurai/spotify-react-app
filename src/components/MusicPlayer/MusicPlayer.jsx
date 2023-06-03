import {
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
  BsFillPlayCircleFill,
} from 'react-icons/bs';

import { useSelector } from 'react-redux';

const MusicPlayer = () => {
  const { activeSong } = useSelector((state) => state.player);
  console.log(activeSong);
  return (
    <div className="player_container">
      <div className="title">
        <img src={activeSong?.album?.cover_small} className="title__img" alt="" />
        <p>
          {activeSong?.artist?.name} - {activeSong?.title}
        </p>
      </div>
      <div className="navigation">
        <div className="navigation_wrapper">
          <div className="seek_bar"></div>
        </div>
      </div>
      <div className="controls">
        <BsFillSkipStartCircleFill className="btn_action" />

        <BsFillPauseCircleFill className="btn_action pp" />

        <BsFillPlayCircleFill className="btn_action pp" />

        <BsFillSkipEndCircleFill className="btn_action" />
      </div>
    </div>
  );
};

export default MusicPlayer;
