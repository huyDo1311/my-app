import React, { Component } from "react";

export default class ItemMovie extends Component {
  
  renderListMovive = () => {
    let list = this.props.data.movieArr.map((item, index) => {
      return (
        <div className="col-2" key={index}>
          <p>{item.tenPhim}</p>
          <img src={item.hinhAnh} style={{ width: 200 }} alt="" />
        </div>
      );
    });
    return list;
    // console.log('this.props.data', this.props.data)
    // console.log('Arr', Arr);
  };

  render() {
    // console.log('this.props.data', this.props.data)
    
    return (
      <div>
        <div className="row">{this.renderListMovive()}</div>
      </div>
    );
  }
}
