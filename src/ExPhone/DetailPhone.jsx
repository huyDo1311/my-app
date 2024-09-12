import React, { Component } from "react";
// import { dataPhone } from "./data";

export default class DetailPhone extends Component {
  render() {
    // console.log('this.props.detailData', this.props.detailData)
    return (
      <div>
            <pre>{JSON.stringify(this.props.detailData, null, 2)}</pre>
      </div>
    );
  }
}
