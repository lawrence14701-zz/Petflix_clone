import React from "react";
import WelcomePage from "./welcome_page/welcome_page_container";
import Login from "./auth/login_form_container";
import SignUp from "./auth/signup_form_container";

import HomePage from './home/homePageContainer';


import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Link, Switch, Route } from "react-router-dom";
// import Nav from './nav/nav_container'


const app = () => {
  return (
    <div>
      <Route exact path="/" component={WelcomePage} />
      {/* <ProtectedRoute exact path="/nav" component={Nav} /> */}

      <ProtectedRoute exact path="/home" component={HomePage} />
      <AuthRoute path="/signup" component={SignUp} />
      <AuthRoute path="/login" component={Login} />
    </div>
  );
};

export default app;
