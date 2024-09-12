import React, { Component } from 'react'

export default class ExColorCar extends Component {
    state = {
        color: "red"
    }
    handleChangeColor = (color) => {
        this.setState({
            color: color
        });
    }
  render() {
    let {color} = this.state;
    return (
      <div>
        ExColorCar
        <div className="container">
            <img className='col-3' src={`./imgEx/CarBasic/products/${color}-car.jpg`} alt="" />
        </div>
        <button onClick={() => {
            this.handleChangeColor("red");
        }} className='btn btn-danger'>Red</button>
        <buttonn onClick={() => {
            this.handleChangeColor("black");
        }} className='btn btn-dark' >Black</buttonn>
      </div>
    )
  }
}
