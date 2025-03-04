import React, { Component } from "react";
import ChileComponent from "./ChileComponent";

export default class LifeCycleReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(newProps, newState) {
    return true
  }

  // shouldComponentUpdate() {
  //   return true;
  // }

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <span>Number: {this.state.number}</span>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >+</button>
        {this.state.number === 1 ? <ChileComponent /> : ''}
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
}
