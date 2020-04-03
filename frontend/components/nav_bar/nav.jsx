import React from "react";
import { Link } from "react-router-dom";



class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
      <div class="petflixLogo">
        <a id="logo" href=""><img src={window.logo} alt="Logo Image"/></a>
      </div>      
      <nav class="main-nav">                
        <a href="#home">Home</a>
        <a href="#tvShows">Genres</a>
        <a href="#movies">Movies</a>
        <a href="#">My List</a>
        <a target="_blank" href="">Portfolio</a>        
      </nav>
      <nav class="sub-nav">
        <a href="#"><i class="fas fa-search sub-nav-logo"></i></a>
        <a href="#"><i class="fas fa-bell sub-nav-logo"></i></a>
        <a href="#">Account</a>        
      </nav>      
    </header>
      );
    }
}

export default Nav;
// <header id="Header">
//     <Link to="/">
//       <img src={window.logo} id="Logo"></img>
//     </Link>
// </header>