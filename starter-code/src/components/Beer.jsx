import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Beer extends Component {
  render() {
    return (
      <Link to={`/beer/${this.props.beer._id}`}>
        <div className="beer">
          <div>
            <img
              src={this.props.beer.image_url}
              alt=""
              className="beer-image"
            />
          </div>
          <div className="">
            <h5 className="">{this.props.beer.name}</h5>
            <p className="">{this.props.beer.tagline}</p>
            <sub>{this.props.beer.contributed_by}</sub>
          </div>
        </div>
      </Link>
    );
  }
}
