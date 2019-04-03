import React, { Component } from 'react';
import axios from "axios";

export default class ThoughtData extends Component {
  constructor() {
    super();
    this.state = {
      thoughts: [],
      loading: true,
      errMsg: null
    }
  }

  getThoughts() {
    axios.get("http://localhost:8080/thought")
    .then(response => this.setState({
      thoughts: response.data,
      loading: false,
      errMsg: null
    }))
    .catch (err => this.setState({
      loading: false,
      errMsg: "data unavailable"
    }))
  }

  componentDidMount() {
    this.getThoughts();
  }

  render() {
    return (
      <div>
        <h1>{this.state.thoughts?this.state.thoughts.name:<div></div>}</h1>
        <h2>{this.state.thoughts?this.state.thoughts.currentBeer:<div></div>}</h2>
        <h2>{this.state.thoughts?this.state.thoughts.currentThought:<div></div>}</h2>
        <img src={this.state.thoughts?this.state.thoughts.daydream:<div></div>} />
      </div>
    );
  }
}
