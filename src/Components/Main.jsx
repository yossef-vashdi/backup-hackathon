import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Tiles from "./Tiles/Tiles";
import LiveAuctioneers from "./LiveAuctioneers/LiveAuctioneers";
import Blog from "./blog/Blog";

const Main = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/Tiles" component={Tiles} />
        <Route path="/LiveAuctioneers" component={LiveAuctioneers} />
        <Route path="/Blog" component={Blog} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Main;
