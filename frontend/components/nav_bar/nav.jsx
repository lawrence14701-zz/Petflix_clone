import React from "react";
import { Link } from "react-router-dom";
import { withRouter , Redirect} from "react-router";


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.signOut = this.signOut.bind(this);
    this.refresh = this.refresh.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.state = {
      searchBarOpen: false,
    };
  }
  componentDidMount() {
    this.props.fetchAllGenres();
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event){
    if (this.refs.search && !this.refs.search.contains(event.target)){
      this.setState({ searchBarOpen: false });
    }
  }

  submitSearch(e){
    if(this.state.searchBarOpen === true && e.key === 'Enter'){
      this.props.clearSearch();
      this.props.search(e.target.value)
      this.forceUpdate()
      if(this.props.history.location.pathname !== './search'){     
        this.props.history.push("/search");
      }
    }
  }

  refresh(){
    window.location.reload(false);
  }

  signOut(){
    this.props.logout()
  }
  handleClickOpen() {
    if(this.state.searchBarOpen === false){
      this.refs.input.focus()
      this.setState({ searchBarOpen: true });
    }
  }


  render() {
    const { genres, currentUser } = this.props;
    const { searchBarOpen } = this.state;

    return (
      <header id="main-header">
        <div className="petflixLogo">
          <Link to="/browse">
            <img src={window.logo} alt="Logo Image" />
          </Link>
        </div>
        <nav className="main-nav">
          <div>
            <Link to="/browse">Home</Link>
          </div>
          <div id="genre-link" href="#genres">
            Genres
            <ul className="genre-list">
              <i className="fas fa-caret-up genre-caret"></i>
              {genres.map((genre) => {
                return (
                  <li key={genre.id} onClick={this.refresh}>
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
          <div className="search-container">
            <div className="search" ref="search">
              <input
                onKeyUp={this.submitSearch}
                className={searchBarOpen ? "toggle input" : "input"}
                type="text"
                placeholder="hamsters, cats, dogs"
                autoFocus
                ref='input'
              ></input>
              <i
                onClick={this.handleClickOpen}
                className={
                  searchBarOpen
                    ? "fas fa-search active sub-nav-logo"
                    : "fas fa-search sub-nav-logo"
                }
              ></i>
            </div>
          </div>
          <div href="#">
            <i className="fas fa-bell sub-nav-logo"></i>
          </div>
          <div
            className="account-dropdown-menu"
            // onMouseEnter={this.handleDropDown}
            // onMouseLeave={this.handleDropDown}
          >
            <img className="avatar" src={window.avatar} alt="profile avatar" />
            <i className="fas fa-caret-down"></i>
            <div className="account-dropdown-subMenu-container">
              <i className="fas fa-caret-up account-caret"></i>
              <div className="account-sub-menu">
                <ul className="profiles">
                  <li className="profile">
                    <span>Welcome</span>
                    <span> {currentUser.username}</span>
                  </li>
                </ul>
                <div className="account-border"></div>
                <div className="account-sign-out" onClick={this.signOut}>
                  Sign out of Petflix
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Nav);
