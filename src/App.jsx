import { Route, Routes } from 'react-router-dom';

import { Home, ArtistDetails } from './pages';
// import SearchBar from './components/SearchBar/SearchBar';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<ArtistDetails />}></Route>
        </Routes>
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;
