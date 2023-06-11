// import { useParams, Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { getCurrentArtist } from '../redux/actions/playerActions';

// import { useDispatch, useSelector } from 'react-redux';

// const ArtistDetails = () => {
//   const { id } = useParams();
//   const { currentArtist } = useSelector((state) => state.player);
//   console.log(id, currentArtist);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getCurrentArtist(id.toString()));
//   }, [dispatch]);

//   return (
//     <>
//       <Link to="/">
//         <button>Назад</button>
//       </Link>
//       <div>Artist details</div>
//     </>
//   );
// };

// export default ArtistDetails;
