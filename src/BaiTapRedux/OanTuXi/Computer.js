import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
    0 {top: -35px;}
    25% {top: 35px;}
    50% {top: -35px;}
    75% {top: 35px;}
    100% {top: 0;}
  }`;
    return (
      <div className="playerGame">
        <style>{keyframe}</style>
        <div style={{ position: "relative" }} className="theThink">
          <img
            style={{
              position: "absolute",
              left: '30%',
              animation: `randomItem${Date.now()} 0.5s`,
              transform: "rotate(120deg)",
              width: 35,
              height: 35,
            }}
            className="mt-4"
            src={this.props.computer.hinhAnh}
            alt=""
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 150, height: 150 }}
          src="./img/OanTuXi/playerComputer.png"
          alt=""
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.OanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
