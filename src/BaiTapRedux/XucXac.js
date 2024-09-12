import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {

  renderXucXac = () => {
    let {mangXucXac} = this.props.mangXucXac;
    return mangXucXac.map((xucXac, index) => {
      return <img
          key={index}
          className="mt-2"
          style={{ width: 35, height: 35 }}
          src={xucXac.hinhAnh}
          alt={xucXac.hinhAnh}
        />}
        );
  };

  render() {
    return <div>{this.renderXucXac()}</div>;
  }


const mapStateToProps = (state) => {
  // console.log(state.GameXucXacReducer);
  return {
    mangXucXac: state.GameXucXacReducer,
  };
};

export default connect(mapStateToProps)(XucXac);
