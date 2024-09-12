import React, { Component } from 'react'

export default class EventHandling extends Component {
    
    handleClick = () => {
        console.log("click")
    }
    handleSayHello = (name) => {
        console.log('name', name)
    }

    username = "Alice";
    handleChangeUsername = () => {
        this.username = "Techcombank";
        console.log('this.username', this.username);
    }
  
    render() {
    return (
      <div>
        <h2>EventHandling</h2>
        <button onClick={this.handleClick}>click me</button>
        <button onClick={() => this.handleSayHello("CyberSoft")}>Say hello</button>
        <h3>{this.username}</h3>
        <button className='btn btn-success' onClick={this.handleChangeUsername}>Click Vo</button>
      </div>
    )
  }
}
