import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation"; //navigation links



export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }


 

  render() {
    return (
      <header id="Header">
          <Link to="/">
            <img src={window.logo} id="Logo"></img>
          </Link>
          <Navigation />
      </header>
    );
  }
}
