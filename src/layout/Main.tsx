import React, { useState } from "react";
import { Movies, MoviesSearch, Preloader } from "../components";

const API_KEY = process.env.REACT_APP_API_KEY;

enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
}

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (
    searchName: string,
    searchType: SearchType = SearchType.all,
  ) => {
    setLoading(true);
    const myNewRequest = new Request(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchName}&type=${searchType}`,
    );

    await fetch(myNewRequest)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        "Error" in responseJSON ? setMovies([]) : setMovies(responseJSON.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <main className="container content">
      <MoviesSearch handleSearch={handleSearch} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
}

export { Main };
