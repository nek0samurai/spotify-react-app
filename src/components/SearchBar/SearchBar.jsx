import { useRef, useState } from 'react';
import { fetchMusic } from '../../redux/actions/playerActions';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [queryValue, setQueryValue] = useState('');

  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = () => {
    setQueryValue(value);
    dispatch(fetchMusic(value));
  };
  console.log(queryValue);

  const handleInputValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        placeholder="Введите название"
        ref={inputRef}
        value={value}
        onChange={handleInputValue}
        type="text"
        className="input"
      />
      <button onClick={handleSubmit} className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
