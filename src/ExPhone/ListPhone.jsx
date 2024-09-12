import React, { Component } from "react";
import ItemPhone from "./ItemPhone";

export default class ListPhone extends Component {
  // renderPhone = () => {
  //   return console.log("this.props.list", this.props.list);
  // };
  render() {
    // console.log("this.props.list", this.props.list);
    return (
      <div className="row">
        {this.props.list.map((item, index) => {
          return (
            <ItemPhone
              handleClick={this.props.handleClickView}
              key={index}
              phone={item}
            />
          );
        })}
      </div>
    );
  }
}
