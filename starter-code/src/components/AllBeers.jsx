import React, { Component } from "react";
import axios from "axios";
import Beer from "./Beer";

export default class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: []
    };
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      this.setState({ allBeers: response.data });
    });
  }

  render() {
    console.log(this.state.allBeers);
    return (
      <div>
        {this.state.allBeers.map((beer, i) => {
          return <Beer beer={beer} key={i} />;
        })}
      </div>
    );
  }
}
