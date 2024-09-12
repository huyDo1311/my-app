import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="card text-white bg-primary col-3">
          <img  className="card-img-top" src="https://helloconsen.com/wp-content/uploads/2024/03/sua-bot-cho-cho-con.jpeg" alt />
          <div className="card-body">
            <h3><i class="fa fa-thumbs-up"></i>{this.props.like}</h3>
            <h4 className="card-title">Họ tên: Nguyen Van A</h4>
            <p className="card-text">Kich thuoc</p>
          </div>
        </div>
      </div>
    );
  }
}
