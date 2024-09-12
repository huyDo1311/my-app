import React, { Component } from "react";
import "./GameXucXac.css";
import XucXac from "./XucXac.js";
import ThongTinTroChoi from "./ThongTinTroChoi.js";
import { connect } from "react-redux";

class GameXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="title-game text-center mt-5">Bài tập game xúc sắc</div>
        <div className="row text-center mt-5">
          <div className="col-5">
            <button
              onClick={() => {
                this.props.datCuoc(true);
              }}
              className="btnGame"
            >
              Tài
            </button>
          </div>
          <div className="col-2">
            <XucXac />
          </div>
          <div className="col-5">
            <button
              onClick={() => {
                this.props.datCuoc(false);
              }}
              className="btnGame"
            >
              Xỉu
            </button>
          </div>
        </div>
        <div className="thongTinTroChoi text-center">
          <ThongTinTroChoi />
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success p-2 display-4 mt-5"
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu: taiXiu,
      };
      dispatch(action);
    },
    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(GameXucXac);
