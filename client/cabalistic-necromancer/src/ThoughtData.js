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

  // getThoughts() {
  //   axios.get("/api/thought")
  //   .then(response => this.setState({
  //     thoughts: response.data,
  //     loading: false,
  //     errMsg: null
  //   }))
  //   .catch (err => this.setState({
  //     loading: false,
  //     errMsg: "data unavailable"
  //   }))
  // }

  getThoughts() {
    axios.get("https://pdqweb.azurewebsites.net/api/brain")
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
        <h1>{this.state.thought?this.state.thought.name:<div></div>}</h1>
      </div>
    );
  }
}
