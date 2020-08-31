import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Chat from "./Components/Chat";
import Join from './Components/Join'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/chat" component={Chat} />
    <Route path="/auth/join" component={Join} />
  </Switch>
);
