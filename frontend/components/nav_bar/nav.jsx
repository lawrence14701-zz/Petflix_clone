import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllGenres();
  }

  render() {
    let jsx = "";
    const { genres } = this.props;

    return (
      <header id="main-header">
        <div className="petflixLogo">
          <a id="logo" href="">
            <img src={window.logo} alt="Logo Image" />
          </a>
        </div>
        <nav className="main-nav">
          <div><Link to="/browse">Home</Link></div>
          <div id="genre-link" href="#genres">
            Genres
            <ul className="genre-list">
              {genres.map((genre) => {
                return (
                  <li key={genre.id}>
                    <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div><Link to="/movies">Movies</Link></div>
          <div href="#">My List</div>
          <div>
            <a
              target="_blank"
              href="https://github.com/lawrence14701?tab=repositories"
            >
              Portfolio
            </a>
          </div>
        </nav>
        <nav className="sub-nav">
          <div href="#">
            <i className="fas fa-search sub-nav-logo"></i>
          </div>
          <div href="#">
            <i className="fas fa-bell sub-nav-logo"></i>
          </div>
          <div href="#">Account</div>
        </nav>
      </header>
    );
  }
}

export default Nav;
