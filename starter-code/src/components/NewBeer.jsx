import React, { Component } from "react";
import axios from "axios";
import FormField from "./FormField";
import Button from "./Button";
import FormTextArea from "./FormTextArea";

export default class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    };
  }

  handleNameInput = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleTaglineInput = e => {
    this.setState({
      tagline: e.target.value
    });
  };
  handleDescriptionInput = e => {
    console.log(e.target.value);
    console.log("describe!");
    this.setState({
      description: e.target.value
    });
  };
  handleFirst_brewedInput = e => {
    this.setState({
      first_brewed: e.target.value
    });
  };
  handleBrewers_tipsInput = e => {
    this.setState({
      brewers_tips: e.target.value
    });
  };
  handleAttenuation_level = e => {
    this.setState({
      attenuation_level: e.target.value
    });
  };
  handleContributed_by = e => {
    this.setState({
      contributed_by: e.target.value
    });
  };
  handleFormSubmit = e => {
    const allInput = this.state;
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", allInput)
      .then(e => console.log(e));
  };

  render() {
    console.log(this.state);
    return (
      <form>
        <FormField
          inputChange={e => this.handleNameInput(e)}
          name="name"
          label="Name"
          type="text"
          placeholder="Iron beer"
        />
        <FormField
          inputChange={e => this.handleTaglineInput(e)}
          name="tagline"
          label="Tagline"
          type="text"
          placeholder="Not the best beer"
        />
        <FormTextArea
          defaultValue="" // need to set default value to use textarea otherwise it returns error
          inputChange={e => this.handleDescriptionInput(e)}
          label="Description"
          name="description"
          placeholder="Something about the beer"
        />
        <FormField
          inputChange={e => this.handleFirst_brewedInput(e)}
          name="firstBrewed"
          label="First Brewed"
          type="date"
          placeholder="type some info"
        />
        <FormField
          inputChange={e => this.handleBrewers_tipsInput(e)}
          name="brewers_tips"
          label="Brewers tips"
          type="text"
          placeholder="type some info"
        />
        <FormField
          inputChange={e => this.handleAttenuation_level(e)}
          name="attenuation_level"
          label="Attenuation level"
          type="number"
          placeholder="type some info"
        />
        <FormField
          inputChange={e => this.handleContributed_by(e)}
          name="contributed_by"
          label="Contributed by"
          type="text"
          placeholder="your name here"
        />
        <Button submit={e => this.handleFormSubmit(e)} info="Add new" />
      </form>
    );
  }
}
