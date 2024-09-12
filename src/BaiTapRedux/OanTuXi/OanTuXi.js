import React, { Component } from "react";
import "./OanTuXi.css";
import Player from "./Player";
import Computer from "./Computer";
import KetQua from "./KetQua";
import { connect } from "react-redux";

class OanTuXi extends Component {
  render() {
    return (
      <div className="game">
        <div className="row text-center mt-5">
          <div className="col-4 mt-3">
            <Player />
          </div>
          <div className="col-4 mt-3">
            <KetQua />
            <button
              onClick={() => this.props.playGame()}
              className="btn btn-success p-3 display-4"
            >
              Play Game
            </button>
          </div>
          <div className="col-4 mt-3">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if (count > 10) {
          clearInterval(randomComputerItem);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(OanTuXi);
