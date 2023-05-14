import { Route, Routes } from 'react-router-dom';

import style from './App.css';

import { Home, ArtistDetails, Search } from './pages';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/artists/:id" element={<ArtistDetails />}></Route>
        <Route path="/search/:term" element={<Search />}></Route>
      </Routes>
    </div>
  );
}

export default App;
