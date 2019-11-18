import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import NewBeer from "./components/NewBeer";
import RandomBeers from "./components/RandomBeers";
import SingleBeer from "./components/SingleBeer";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all-beers" component={AllBeers} />
          <Route exact path="/random-beer" component={RandomBeers} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beer/:id" component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
