import { useState, useEffect } from 'react';
import { useGetArtistDetailsQuery } from '../redux/services/spotifyApi';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

const ArtistDetails = () => {
  const { id } = useParams();
  const { data, error, isFetching } = useGetArtistDetailsQuery(id);

  const [handleId, setHandleId] = useState('');

  const artistName = data?.artists[0]?.name;
  const genres = data?.artists[0]?.genres;
  const imgSrc = data?.artists[0]?.images[0]?.url;

  useEffect(() => {
    setHandleId(id);
  }, [data]);

  if (isFetching) return <h1>Loading...</h1>;

  if (error) return <h1>Error</h1>;

  return (
    <>
      {error ? (
        <>Oh no</>
      ) : data ? (
        <>
          <div className="artist-card">
            <h1>{artistName}</h1>
            <span>{genres.join(', ')}</span>
            <img src={imgSrc} alt={artistName} />
          </div>
        </>
      ) : null}
    </>
  );
};

export default ArtistDetails;
