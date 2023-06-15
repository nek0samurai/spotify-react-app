import { useSelector } from 'react-redux';
import MusicCard from './MusicCard/MusicCard';

const MusicRow = () => {
  const { songsData, activeSong, isPlaying, isLoading, error, isActive } = useSelector(
    (state) => state.player,
  );

  const songs = songsData.map((song) => song);

  return (
    <>
      <div className="line-row container">
        <span className="line-row__track">Трек</span>
        <span className="line-row__artist">Исполнитель</span>
        <span className="line-row__album">Альбом</span>
      </div>
      <>
        {error && <h1>{error}</h1>}
        {isLoading && <h1>Loading</h1>}
        <div className="card-row ">
          {songs.map((song, i) => (
            <MusicCard
              songsData={songsData}
              song={song}
              key={song.id}
              isPlaying={isPlaying}
              activeSong={activeSong}
              isActive={isActive}
              i={i}></MusicCard>
          ))}
        </div>
      </>
    </>
  );
};

export default MusicRow;
