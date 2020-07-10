import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import NewUsers from "./pages/NewUsers";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/newUsers" component={NewUsers} />
    </Switch>
  );
};

export default Routes;
