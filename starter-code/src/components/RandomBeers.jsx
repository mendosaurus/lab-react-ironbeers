import React, { Component } from "react";
import axios from "axios";

export default class RandomBeers extends Component {
  state = {
    beer: {}
  };
  componentDidMount() {
      console.log(this.props)
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(data => {
      this.setState({
        beer: data.data
      });
    });
  }

  render() {
    console.log(this.state.beer);
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 mx-auto">
            <img
              src={this.state.beer.image_url}
              alt=""
              className="beer-image2"
            />
            <div className="beer-row">
              <div>
                <h1>{this.state.beer.name}</h1>
                <h2>{this.state.beer.tagline}</h2>
              </div>
              <div>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
              </div>
            </div>

            <div>
              <p>{this.state.beer.description}</p>
              <sub>{this.state.beer.contributed_by}</sub>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
