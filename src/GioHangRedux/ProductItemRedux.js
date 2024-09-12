import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItemRedux extends Component {
  render() {
    let {product} = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img style={{width: 280, height:350}} src={product.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <p className="card-text">{product.giaBan.toLocaleString()}</p>
            <button className="btn btn-success" onClick={() => {this.props.themGioHang(product)}}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      themGioHang : (sanPham) => {
         let spGioHang = {maSP: sanPham.maSP, tenSP: sanPham.tenSP, hinhAnh: sanPham.hinhAnh, soLuong: 1, gia: sanPham.giaBan};
         let action = {type:  'THEM_GIO_HANG', spGioHang};
         dispatch(action);
      }
  }
}

export default connect(null, mapDispatchToProps)(ProductItemRedux)
