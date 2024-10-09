import React from "react";
import MoviesLIst from "../components/MoviesLIst";

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=abf416ea&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;

    return (
      <main className="content container">
        {movies.length > 0 ? (
          <MoviesLIst movies={this.state.movies} />
        ) : (
          <div className="progress orange darken-3">
            <div className="indeterminate"></div>
          </div>
        )}
      </main>
    );
  }
}

export default Main;
