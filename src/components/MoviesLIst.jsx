import Movie from "./Movie";

function MoviesList(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h4 className="nothing">Nothing found...</h4>
      )}
    </div>
  );
}

export default MoviesList;
