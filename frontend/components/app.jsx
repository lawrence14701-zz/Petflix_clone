import React from "react";
import WelcomePage from "./welcome_page/welcome_page";
import Login from "./auth/login_form_container";
import Signup from "./auth/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Link, Switch, Route } from "react-router-dom";


const app = () => {
  return (
    <div>
      <Route exact path="/" component={WelcomePage} />
      <AuthRoute path="/signup" component={Signup} />
      <AuthRoute path="/login" component={Login} />
    </div>
  );
};

export default app;
