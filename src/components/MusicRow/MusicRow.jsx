import { useSelector } from 'react-redux';
import MusicCard from './MusicCard/MusicCard';

const MusicRow = () => {
  const { songsData, activeSong, isPlaying } = useSelector((state) => state.player);

  console.log(songsData);

  return (
    <>
      {songsData.length === 0 ? (
        <h1 className="card-error">Error</h1>
      ) : (
        <div className="card-row">
          <MusicCard
            songsData={songsData}
            isPlaying={isPlaying}
            activeSong={activeSong}></MusicCard>
        </div>
      )}
    </>
  );
};

export default MusicRow;
