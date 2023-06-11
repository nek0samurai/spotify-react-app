import { useSelector } from 'react-redux';

const SidePanel = () => {
  const { currentArtist, currentArtistTopTracks } = useSelector((state) => state.player);
  console.log(currentArtistTopTracks);
  return (
    <div className="side-panel">
      <div className="side-panel__col">
        <img src={currentArtist?.picture_medium} alt="artist" />
        <h4 className="side-panel__artist">{currentArtist.name}</h4>
        <h5 className="side-panel__top">TOP 10 </h5>
        <ul className="side-panel__list">
          {currentArtistTopTracks.map((track) => (
            <>
              <li className="side-panel__list-item" key={track.id}>
                {track.title}
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
