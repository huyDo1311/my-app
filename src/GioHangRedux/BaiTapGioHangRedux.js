import React, { Component } from "react";
import GioHangRedux from "./GioHangRedux";
import ProductListRedux from "./ProductListRedux";
import { connect } from "react-redux";

class BaiTapGioHangRedux extends Component {


  renderSoLuong = () => {
    return this.props.gioHang.reduce((tongSoLuong, spGH, index) => {
      return tongSoLuong += spGH.soLuong;
    },0); 
  }

  render() {

    return (
      <div className="container">
        <h3>Danh sách sản phẩm</h3>
        <div className="text-end">
          <span        
            type="button"
              className="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">
            <i className="fa fa-cart mr-5">
              <i className="fa fa-cart-arrow-down"></i>
            </i>
              ({this.renderSoLuong()}) Giỏ hàng
          </span>
        </div>
        <ProductListRedux />
        <GioHangRedux />
      </div>
    );
  }
}

<div>
  {/* Button trigger modal */}
  <button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Modal title
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">...</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</div>;

const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.gioHang
  }
}

export default connect(mapStateToProps, null)(BaiTapGioHangRedux);