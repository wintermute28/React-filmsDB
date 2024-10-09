import Movie from "./Movie";

function MoviesLIst(props) {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.map((movie) => {
        return <Movie key={movie.imdbID} {...movie} />;
      })}
    </div>
  );
}

export default MoviesLIst;
