const Movie = (props) => {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="card movie orange darken-3">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            className="activator"
            src={`https://placehold.co/300x400?text=${title}`}
            alt="poster"
          />
        ) : (
          <img className="activator" src={poster} alt="poster" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p className="card-content-descr">
          <span>
            {year.length > 4 ? `Years: ${year}` : `Year: ${year}`}
            {/* Year: {year} */}
          </span>
          <span className="right">{type[0].toUpperCase() + type.slice(1)}</span>
        </p>
        <p>
          <a
            className="imdb-link"
            target="_blank"
            href={`https://www.imdb.com/title/${id}`}
            rel="noreferrer"
          >
            IMDb link
          </a>
        </p>
      </div>
    </div>
  );
};

export default Movie;
