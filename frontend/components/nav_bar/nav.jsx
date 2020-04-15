import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      searchBarOpen: false
    }
  }
  componentDidMount() {
    this.props.fetchAllGenres();
  }
  handleClick(){
    const currentState = this.state.searchBarOpen;
    this.setState({searchBarOpen: !currentState})
  }

  render() {
    const { genres } = this.props;
    const {searchBarOpen} = this.state;

    return (
      <header id="main-header">
        <div className="petflixLogo">
          <a id="logo" href="">
            <img src={window.logo} alt="Logo Image" />
          </a>
        </div>
        <nav className="main-nav">
          <div>
            <Link to="/browse">Home</Link>
          </div>
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
          <div>
            <Link to="/movies">Movies</Link>
          </div>
          <Link to="/myList">My List</Link>
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
          <div className="search" onClick={this.handleClick}>
            <input
              className={searchBarOpen ? "toggle input" : "input"}
              type="text"
              placeholder="puppies, cats, dogs"
            ></input>
            <i
              className={searchBarOpen ? "fas fa-search active sub-nav-logo" : "fas fa-search sub-nav-logo"}
            ></i>
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
