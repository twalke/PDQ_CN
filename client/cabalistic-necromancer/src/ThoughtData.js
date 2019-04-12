import React, { Component } from 'react';

export default class ThoughtData extends Component {
  constructor() {
    super();
    this.state = {
      buttonClicked: true,
      loading: true,
      errMsg: null
    }
  }

  componentDidMount(){
  }

  render() {
    let thoughts = this.props.thoughts;
    if(thoughts.name === undefined) {
      return (<div className="employeeName">Loading...</div>);
    }
    return (
      <div className="fullThought">
        <div className="empNameAndImg">
          <img className="employeeImg" src={require("./img/empPics/"+thoughts.name+".png")} alt={"employeePicture"} />
          <h1 className="employeeName">{thoughts?thoughts.name:<div></div>}</h1>
        </div>
        <h2 className="currentBeerType">Current Beer: {thoughts?thoughts.currentBeer:<div></div>}</h2>
        <h2 className="currentThoughtQuote">Current Thought: {thoughts?thoughts.currentThought:<div></div>}</h2>
        <div className="daydream">
          <h2>Daydream</h2>
          <img src={thoughts?thoughts.daydream:<div></div>} alt={"daydream"} />
        </div>
      </div>
    );
  }
}
