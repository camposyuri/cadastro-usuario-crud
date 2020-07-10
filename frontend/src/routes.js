import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
    </Switch>
  );
};

export default Routes;
