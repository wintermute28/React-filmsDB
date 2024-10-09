import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: "",
  };

  handleKey = (event) => {
    if (event.key === "Enter" && this.state.search !== "") {
      this.props.searchMovies(this.state.search);
    }
  };

  handleClick = () => {
    if (this.state.search) {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="input-field input-group">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <a
            className="waves-effect waves-light btn btn-search"
            onClick={this.handleClick}
            tabIndex="0"
          >
            <i className="material-icons">search</i>
          </a>
        </div>
      </div>
    );
  }
}
