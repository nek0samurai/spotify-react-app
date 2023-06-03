import { useSelector } from 'react-redux';
import MusicCard from './MusicCard/MusicCard';

const MusicRow = () => {
  const { songsData, activeSong, isPlaying, error, isLoading } = useSelector(
    (state) => state.player,
  );

  return (
    <>
      {error ? (
        <h1>Error</h1>
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
