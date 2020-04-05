import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let jsx = "";
    if (this.props.currentUser) {
      jsx = (
        <header id="main-header">
          <div className="petflixLogo">
            <a id="logo" href="">
              <img src={window.logo} alt="Logo Image" />
            </a>
          </div>
          <nav className="main-nav">
            <a href="#home">Home</a>
            <a href="#tvShows">Genres</a>
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
    return (
      jsx
      );
  }
}

export default Nav;
