function Header() {
  return (
    <div>
      <nav className="orange darken-3">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            FilmsDB
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">Sass</a>
            </li>
            <li>
              <a href="#">Components</a>
            </li>
            <li>
              <a href="#">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
