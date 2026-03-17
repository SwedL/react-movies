import React, { useState, useRef } from "react";

enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
}

interface MoviesSearchProps {
  handleSearch: CallableFunction;
}

function MoviesSearch(props: MoviesSearchProps) {
  const [searchType, setSearchType] = useState(SearchType.all);
  const [search, setSearch] = useState("");
  // const searchRef = useRef<HTMLInputElement>(null); # либо через useRef: в input -> ref={searchRef}

  const handleRadio = (searchType: SearchType) => {
    setSearchType(searchType);
    if (search) {
      props.handleSearch(search.trim(), searchType);
    }
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search) {
      props.handleSearch(search.trim(), searchType);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className="search-form">
      <div className="search-container">
        <div className="search-input">
          <input
            type="text"
            name="search"
            placeholder="Название фильма"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="btn">Поиск</button>
      </div>
      <div className="radio-input-container">
        <label className="label-radio-input">
          <input
            className="with-gap"
            type="radio"
            name="searchType"
            data-type={SearchType.all}
            onChange={() => handleRadio(SearchType.all)}
            checked={searchType === SearchType.all}
          />
          <span>All</span>
        </label>
        <label className="label-radio-input">
          <input
            className="with-gap"
            type="radio"
            name="searchType"
            data-type={SearchType.movie}
            onChange={() => handleRadio(SearchType.movie)}
            checked={searchType === SearchType.movie}
          />
          <span>Movies</span>
        </label>
        <label className="label-radio-input">
          <input
            className="with-gap"
            type="radio"
            name="searchType"
            data-type={SearchType.series}
            onChange={() => handleRadio(SearchType.series)}
            checked={searchType === SearchType.series}
          />
          <span>Series</span>
        </label>
      </div>
    </form>
  );
}

export { MoviesSearch };
