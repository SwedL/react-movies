import React from "react";
import { Movies, MoviesSearch, FilmData, Preloader } from "../components";

const API_KEY = process.env.REACT_APP_API_KEY;

enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
}

interface MainProps {}

interface MainState {
  movies: Array<FilmData>;
  loading: boolean;
}

export class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  async handleSearch(
    searchName: string,
    searchType: SearchType = SearchType.all,
  ) {
    this.setState({ loading: true });
    const myNewRequest = new Request(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchName}&type=${searchType}`,
    );

    await fetch(myNewRequest)
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({ movies: responseJSON.Search });
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <MoviesSearch handleSearch={this.handleSearch} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}
