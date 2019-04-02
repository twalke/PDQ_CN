import React, { Component } from 'react';
import axios from "axios";

class ThoughtDetail extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      currentBeer: "",
      currentThought: "",
      daydream: "",
      loading: true,
      errMsg: null
    }
  }

  getThought() {
    console.log(this.props.id)
    axios.get(`/api/thought/${this.props.id}`)
    .then(response => this.setState({
      thought: response.data,
      loading: false,
      errMsg: null
    }))
    .catch (err => this.setState({
      loading: false,
      errMsg: "data unavailable"
    }))
  }

  componentDidMount() {
    this.getThought();
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default ThoughtDetail;
