import React, { Component } from "react";

export default class Cart extends Component {
  renderTable = () => {
    let { dataCart, handleDelete, handleChangeTotal} = this.props;
    return dataCart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <img style={{ width: 100 }} src={item.image} alt="" />
          </td>
          <td>
            <button onClick={() => {handleChangeTotal(item.id, -1)}} className="btn btn-success">-</button>
            <strong className="mx-2">{item.total}</strong>
            <button onClick={() => {handleChangeTotal(item.id, 1)}} className="btn btn-success">+</button>
          </td>
          <td>
            <button
              onClick={() => handleDelete(item.id)}
              className="btn btn-dark"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  // console.log('this.props', this.props)
  render() {
    // console.log('this.props', this.renderTable())
    return (
      <div className="col-6">
        <div className="table-responsive">
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
