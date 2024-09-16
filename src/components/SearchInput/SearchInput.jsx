import { useRef, useState } from 'react';

import searchIcon from '../../assets/icons/search.svg';

export default function SearchInput({ getMeaning }) {
  const [isError, setIsError] = useState(false);
  const inputRef = useRef(null);

  const handleSearchWord = (e) => {
    e.preventDefault();

    const searchInputValue = inputRef.current.value;

    if (searchInputValue === '') {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
      return;
    }
    return getMeaning(searchInputValue);
  };
  return (
    <>
      <div className="padding pt-0">
        <form className="search" onSubmit={handleSearchWord}>
          <input
            className={`input-search ${isError ? 'input-empty' : ''}`}
            type="search"
            ref={inputRef}
            placeholder="Search for any word..."
          />
          <button type="submit" className="btn-search">
            <img src={searchIcon} alt="Search Icon" />
          </button>
        </form>
        {isError && (
          <p className="text-red p-2 font-semibold">Whoops, can’t be empty…</p>
        )}
      </div>
    </>
  );
}
