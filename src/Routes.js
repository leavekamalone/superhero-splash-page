import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Donate from "./Donate";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/donate" component={Donate} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;