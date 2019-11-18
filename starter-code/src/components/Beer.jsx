import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Beer extends Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={this.props.beer.image_url}
              className="card-img"
              alt="..."
              width="20px"
              height="100px"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.beer.name}</h5>
              <p className="card-text">{this.props.beer.tagline}</p>
              <p className="card-text">
                <small className="text-muted">
                  {this.props.beer.contributed_by}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      //   <div className='card'>
      //     <div>
      //       <img src={this.props.beer.image_url} alt="" />
      //     </div>
      //     <div>
      //       <h5>{this.props.beer.name}</h5>
      //       <p>{this.props.beer.tagline}</p>
      //       <sub>{this.props.beer.contributed_by}</sub>
      //     </div>
      //   </div>
    );
  }
}
