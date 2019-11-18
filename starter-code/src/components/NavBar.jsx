import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <h1>React IronBeers</h1>
        <ul className={"nav nav-pills nav-fill justify-content-center"}>
          <li className="nav-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/all-beers"}>All beers</Link>
          </li>
          <li className="nav-item">
            <Link to={"/random-beer"}>Random Beer</Link>
          </li>
          <li className="nav-item">
            <Link to={"/new-beer"}>New Beer</Link>
          </li>
        </ul>
      </header>
    );
  }
}
