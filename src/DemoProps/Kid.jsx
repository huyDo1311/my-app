import React, { Component } from 'react'

export default class Kid extends Component {
  render() {
    console.log('this.props', this.props.dataUsername)
    return (
      <div>
      Kid
      <div className="">{this.props.dataUsername}</div>
      <h2>{this.props.age}</h2>
      <button onClick={this.props.handleClick} className='btn btn-primary'>Click</button>
      </div>
    )
  }
}
