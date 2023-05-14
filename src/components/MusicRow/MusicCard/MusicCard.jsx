// import React from 'react';

// import { setData } from '../../redux/slices/playerSlice';

// import { useDispatch, useSelector } from 'react-redux';
// import { useGetSongByNameQuery } from '../../redux/services/spotifyApi';

import { Link } from 'react-router-dom';

const MusicCard = (items) => {
  return (
    <>
      {!items.props ? (
        <>Oh no</>
      ) : items.props ? (
        <>
          {items.props.map((item) => (
            <div className="card" key={item.data.id}>
              <img
                src={item.data.albumOfTrack.coverArt?.sources[0]?.url}
                className="card__img"
                alt=""
              />
              <>{console.log(item)}</>
              <div className="card__info">
                <h3 className="card__name">{item.data.name}</h3>
                <Link
                  to={`/artists/${item.data.artists.items[0].uri.replace(/spotify:artist:/g, '')}`}>
                  <h4 className="card__artist">{item.data.artists.items[0].profile.name}</h4>
                </Link>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </>
    // <div className="card" key={song.data.id}>
    //   <img src={song.data?.albumOfTrack?.coverArt?.sources[0].url} alt="" />
    // </div>
  );
};

export default MusicCard;
