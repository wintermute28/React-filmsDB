import React from "react";
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";
import Preloader from "../components/Preloader";

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=abf416ea&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str) => {
    fetch(`https://www.omdbapi.com/?apikey=abf416ea&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="content container">
        <Search searchMovies={this.searchMovies} />
        {movies.length > 0 ? (
          <MoviesList movies={this.state.movies} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }
}

export default Main;
