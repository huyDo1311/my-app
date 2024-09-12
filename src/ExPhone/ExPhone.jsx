import React, { Component } from "react";
import ListPhone from "./ListPhone";
import DetailPhone from "./DetailPhone";
import { dataPhone } from "./data";
import ItemPhone from "./ItemPhone";

export default class ExPhone extends Component {
  state = {
    details: dataPhone[0],
  };

  handleChangePhone = (phone) => {
    this.setState({
      details: phone,
    });
  };

  render() {
    return (
      <div>
        <ListPhone handleClickView={this.handleChangePhone} list={dataPhone} />

        <DetailPhone detailData={this.state.details} />
        <ItemPhone  />
      </div>
    );
  }
}
