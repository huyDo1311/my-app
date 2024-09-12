import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { item, handleClickAdd, handleDelete } = this.props;
    // console.log('item', this.props);
    return (
      <div className="col-3">
        <div className="card text-black ">
          <img className="card-img-top" src={item.image} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">{item.price}</p>
            <button onClick={() => handleClickAdd(item)} className="btn btn-danger">Add</button>
            <button className="btn btn-dark">Show</button>
          </div>
        </div>
      </div>
    );
  }
}
