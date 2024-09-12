import React, { Component } from "react";

export default class ItemPhone extends Component {
  render() {
      console.log('this.props', this.props);
      let {phone} = this.props;
      return (
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={phone.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{phone.tenSP}</h5>
            <button
              onClick={() => {
                this.props.handleClick(phone);
              }}
              className="btn btn-success"
            >
              View
            </button>
          </div>
        </div>
      </div>
    );
  }
}
