import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    soLuong: 1,
    userName: "Alice",
  };
  handleTangSoLuong = () => {
    this.setState({
      soLuong: this.state.soLuong + 1,
    });
  };
  handleGiamSoLuong = () => {
    this.setState({
      soLuong: this.state.soLuong - 1,
    });
  };

  // userName = "Alice";
  // handleChangeUserName = (tenMoi) => {
  //   this.setState({
  //     name: this.userName.name = tenMoi,
  //   })
  // }
  render() {
    return (
      <div className="container">
        <h3>DemoState</h3>
        <button className="btn btn-success" onClick={this.handleTangSoLuong}>
          +
        </button>
        <h2>{this.state.soLuong}</h2>
        <button className="btn btn-success" onClick={this.handleGiamSoLuong}>
          -
        </button>
        <h4>Demo state - {this.state.userName}</h4>
        <button
          onClick={() => {
            this.setState((prevState) => ({
              userName: prevState.userName === "Alice" ? "Tommy" : "Alice",
            }));
          }}
        >
          Change Alice to Tomy
        </button>
      </div>
    );
  }
}

// import React, { useState } from 'react';

// function DemoState() {
//     const [count, setCount] = useState(0);

//     const handleIncrease = () => {
//         setCount(count + 1);
//     };

//     const handleDecrease = () => {
//         setCount(count - 1);
//     };

//     return (
//         <div className="container">
//             <button className="button" onClick={handleDecrease}>-</button>
//             <span className="display">{count}</span>
//             <button className="button" onClick={handleIncrease}>+</button>
//         </div>
//     );
// }

// export default DemoState;
