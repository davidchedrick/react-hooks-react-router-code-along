import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/about">
        <About />
      </Route> 
      <Route path="/login">
        <Login />
      </Route> 
      <Route exact path="/">
        <Home />
      </Route> 
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
