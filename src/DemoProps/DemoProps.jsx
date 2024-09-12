import React, { Component } from 'react'
import Kid from './Kid';

export default class DemoProps extends Component {
    username = "ALice";

    state = {
        username: "Alice",
    };

    handleChangeUsername = () => {
        this.setState({ username: this.state.username == "Alice" ? "Tomyyyyyy" : "Alice"})
    };

    render() {
    return (
      <div>
            <h2>DemoProps</h2>
            <Kid handleClick={this.handleChangeUsername}  dataUsername={this.state.username} age={20}/>
      </div>
    )
  }
}
