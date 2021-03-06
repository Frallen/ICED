import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { compose } from "redux";
import Home from "./components/home/Home";
import DicscoverContainer from "./components/Discover/dicscoverContainer";
import MovieContainer from "./components/Movie/movieContainer";
import PeopleContainer from "./components/People/peopleContainer";
import TopActorContainer from "./components/TopActor/topActorContainer";

const App = () => {
  return (
    <div className="main">
      <Header></Header>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/discover">
            <DicscoverContainer></DicscoverContainer>
          </Route>
          <Route path="/movie/:id">
            <MovieContainer></MovieContainer>
          </Route>
          <Route path="/people">
            <TopActorContainer></TopActorContainer>
          </Route>
          <Route path="/profile/:id">
            <PeopleContainer></PeopleContainer>
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    </div>
  );
};

export default compose(connect(null, {}), withRouter)(App);
