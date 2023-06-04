import { useSelector } from 'react-redux';
import MusicCard from './MusicCard/MusicCard';

const MusicRow = () => {
  const { songsData, activeSong, isPlaying, error } = useSelector((state) => state.player);

  const songs = songsData.map((song) => song);

  return (
    <>
      {error ? (
        <h1>Error</h1>
      ) : (
        <>
          <div className="line-row container">
            <span className="line-row__track">Трек</span>
            <span className="line-row__artist">Исполнитель</span>
            <span className="line-row__album">Альбом</span>
          </div>

          <div className="card-row ">
            {songs.map((song, i) => (
              <MusicCard
                songsData={songsData}
                song={song}
                key={song.id}
                isPlaying={isPlaying}
                activeSong={activeSong}
                i={i}></MusicCard>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default MusicRow;
