import React from "react";

enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
}

interface MoviesSearchProps {
  handleSearch: CallableFunction;
}

interface MoviesSearchState {
  searchType: SearchType;
}

export class MoviesSearch extends React.Component<
  MoviesSearchProps,
  MoviesSearchState
> {
  private searchRef: React.RefObject<HTMLInputElement | null>;

  constructor(props: MoviesSearchProps) {
    super(props);
    this.state = {
      searchType: SearchType.all,
    };
    this.searchRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this.searchRef.current?.value) {
      this.props.handleSearch(
        this.searchRef.current.value.trim(),
        this.state.searchType,
      );
    }
  }

  render(): React.ReactNode {
    return (
      <form action="" onSubmit={this.handleSubmit} className="search-form">
        <div className="search-container">
          <div className="search-input">
            <input
              type="text"
              name="search"
              placeholder="Название фильма"
              ref={this.searchRef}
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
              onChange={() => this.setState({ searchType: SearchType.all })}
              checked={this.state.searchType === SearchType.all}
            />
            <span>All</span>
          </label>
          <label className="label-radio-input">
            <input
              className="with-gap"
              type="radio"
              name="searchType"
              data-type={SearchType.movie}
              onChange={() => this.setState({ searchType: SearchType.movie })}
              checked={this.state.searchType === SearchType.movie}
            />
            <span>Movies</span>
          </label>
          <label className="label-radio-input">
            <input
              className="with-gap"
              type="radio"
              name="searchType"
              data-type={SearchType.series}
              onChange={() => this.setState({ searchType: SearchType.series })}
              checked={this.state.searchType === SearchType.series}
            />
            <span>Series</span>
          </label>
        </div>
      </form>
    );
  }
}
