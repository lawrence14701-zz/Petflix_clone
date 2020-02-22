import React from 'react';
import { Route } from "react-router-dom";
import WelcomePage from './welcome_page/welcome_page';



const app = () => { 
    <div>
      <Route exact path="/" component={WelcomePage} />
    </div>;
}