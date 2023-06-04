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

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryValue(value);
    dispatch(fetchMusic(value));
  };
  console.log(queryValue);

  const handleInputValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <FaSearch />
        <input
          placeholder="Поиск"
          ref={inputRef}
          value={value}
          onChange={handleInputValue}
          type="text"
          className="input"
        />
      </div>
    </form>
  );
};

export default SearchBar;
