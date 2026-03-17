import { Movie, FilmData } from ".";

interface MoviesProps {
  movies: Array<FilmData>;
}

export function Movies(props: MoviesProps) {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}
