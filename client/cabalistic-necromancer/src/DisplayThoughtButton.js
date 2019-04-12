import React, { Component } from "react";
import axios from "axios";

import ThoughtData from "./ThoughtData";

class DisplayThoughtButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      thoughts: [],
      isThoughtDisplayed: false,
      buttonClicked: false,
      loading: true,
      errMsg: null
    }
  }

  loading() {
    this.setState({
      buttonClicked: true
    });
  }

  async GetThoughts() {
    let thoughts = [];

    await axios.get("http://localhost:8080/thought")
    .then(response => thoughts = response.data)
    .catch (err => {
      this.handleClick();
      return null;
    })

    return thoughts;
  }

  async handleClick() {
    this.loading();
    this.setState({
      buttonClicked: false,
      isThoughtDisplayed: true,
      thoughts: await this.GetThoughts()
    });
  }

  render() {
    const isThoughtDisplayed = this.state.isThoughtDisplayed;
    const buttonClicked = this.state.buttonClicked;
    let button;
    button = <button onClick={this.handleClick}>Display Thought</button>

    if (isThoughtDisplayed && !buttonClicked && this.state.thoughts) {
      return (
        <div className="thoughtContainer">
          <Thought thoughts={this.state.thoughts}/>
          {button}
        </div>
      );
    } else if(!isThoughtDisplayed && buttonClicked) {
      return (
        <div className="thoughtContainer">
          <div>Loading...</div>
          {button}
        </div>
      );
    } else if(isThoughtDisplayed && buttonClicked && this.state.thoughts) {
      return (
        <div className="thoughtContainer">
        <Thought thoughts={this.state.thoughts}/>
          <div>Loading...</div>
          {button}
        </div>
      );
    } else {
      return (
        <div className="thoughtContainer">
          {button}
        </div>
      );
    }
  }
}

function Thought(state) {
  let thoughts = state.thoughts;

  return <ThoughtData thoughts={thoughts}/> ;
 }

export default DisplayThoughtButton;
