function Header() {
  return (
    <div>
      <nav className="orange darken-3">
        <div className="nav-wrapper">
          <a href="" className="brand-logo">
            FilmsDB
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a target="_blank" href="https://www.imdb.com/">
                IMDb
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.rottentomatoes.com/">
                Rotten Tomatoes
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.metacritic.com/">
                Metacritic
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
