import React, { Component } from "react";
import Profile from "./Profile";

export default class PureComponent extends Component {
  state = {
    like: 0,
  };

  likeImage = () => {
    let isLike = this.state.like + 1;
    this.setState({
        like: isLike
    })
  }

  render() {
    return (
      <div className="container">
      <h3>Profile</h3>
        <Profile like={this.state.like} />
        <br />
        <div className="card text-white bg-success">
          <h3>Danh Gia</h3>
          <div className="card-body">
            <h4 className="card-title">Danh gia ({this.state.like})</h4>
            <p className="card-text">
                <button onClick={() => {
                    this.likeImage()
                }} className="btn btn-info">
                <i class="fa fa-thumbs-up"></i>
                </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
