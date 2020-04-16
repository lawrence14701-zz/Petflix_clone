import React from "react";
import WelcomePage from "./welcome_page/welcome_page_container";
import Login from "./auth/login_form_container";
import SignUp from "./auth/signup_form_container";

import HomePage from './home/homePageContainer';
import PlayMovie from './play_movie/play_movie_container';
import NavBar from './nav_bar/nav_container'
import Movies from './all_movies/movies_container'
import MyList from './myList/my_list_container';

import Genre from './showGenre/genre_container';
import Footer from './footer/footer';


import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Link, Switch, Route } from "react-router-dom";



const app = () => {
  return (
    <div>
      <Route exact path="/" component={WelcomePage} />

      {/* navbar */}
      <ProtectedRoute exact path="/browse" component={NavBar} />
      <ProtectedRoute exact path="/genre/:genreId" component={NavBar} />
      <ProtectedRoute exact path="/movies" component={NavBar} />
      <ProtectedRoute exact path="/myList" component={NavBar} />

      <ProtectedRoute exact path="/browse" component={HomePage} />
      <ProtectedRoute exact path="/watch/:movieId" component={PlayMovie} />
      <ProtectedRoute exact path="/genre/:genreId" component={Genre} />
      <ProtectedRoute exact path="/movies" component={Movies} />
      <ProtectedRoute exact path="/myList" component={MyList} />

      <ProtectedRoute exact path="/browse" component={Footer} />
      <ProtectedRoute exact path="/movies" component={Footer} />
      <ProtectedRoute exact path="/" component={Footer} />

      <AuthRoute path="/signup" component={SignUp} />
      <AuthRoute path="/login" component={Login} />
    </div>
  );
};

export default app;
