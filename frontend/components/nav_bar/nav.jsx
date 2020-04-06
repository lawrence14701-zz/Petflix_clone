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
          <Link to="/browse">Home</Link>
          <a id="genre-link" href="#genres">
            Genres
            <ul className="genre-list">
              {genres.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ul>
          </a>
          <a href="#movies">Movies</a>
          <a href="#">My List</a>
          <a
            target="_blank"
            href="https://github.com/lawrence14701?tab=repositories"
          >
            Portfolio
          </a>
        </nav>
        <nav className="sub-nav">
          <a href="#">
            <i className="fas fa-search sub-nav-logo"></i>
          </a>
          <a href="#">
            <i className="fas fa-bell sub-nav-logo"></i>
          </a>
          <a href="#">Account</a>
        </nav>
      </header>
    );
  }
}

export default Nav;
