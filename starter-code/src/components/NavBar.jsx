import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <h1 className="title">React IronBeers</h1>
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/all-beers"} className="nav-link">
              All beers
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/random-beer"} className="nav-link">
              Random Beer
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/new-beer"} className="nav-link">
              New Beer
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}
