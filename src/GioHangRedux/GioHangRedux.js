import React, { Component } from "react";
import { connect } from "react-redux";

class GioHangRedux extends Component {
  thanhTien = () => {
    return this.props.gioHang
      .reduce((tongTien, spGH, index) => {
        return (tongTien += spGH.gia * spGH.soLuong);
      }, 0)
      .toLocaleString();
  };

  render() {
    // nơi trả props
    //props = {gioHang: state.stateGioHang.gioHang}
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content" style={{ minWidth: 800 }}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Giỏ Hàng
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Mã sp</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Giá</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.gioHang.map((spGH, index) => {
                      return (
                        <tr key={index}>
                          <td>{spGH.maSP}</td>
                          <td>
                            <img
                              style={{ width: 50, height: 50 }}
                              src={spGH.hinhAnh}
                              alt=""
                            />
                          </td>
                          <td>{spGH.tenSP}</td>
                          <td>{spGH.gia}</td>
                          <td>
                            <button
                              onClick={() => {this.props.tangGiamSoLuong(spGH.maSP,true)}}
                              className="btn btn-success"
                            >
                              +
                            </button>
                            {spGH.soLuong}
                            <button
                              onClick={() => {this.props.tangGiamSoLuong(spGH.maSP,false)}}
                              className="btn btn-success"
                            >
                              -
                            </button>
                          </td>
                          <td>{(spGH.gia * spGH.soLuong).toLocaleString()}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                this.props.xoaGioHang(spGH.maSP);
                              }}
                            >
                              Xoá
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <th colSpan={5 }></th>
                    <th>Tổng tiền</th>
                    <th>{(this.props.gioHang.reduce((tongTien,spGH,index) => { return tongTien +=  spGH.soLuong * spGH.gia },0)).toLocaleString()}</th>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // state = rootReducer
  return {
    // return về 1 props mới tên là gioHang => state(rootReducer) => stateGioHang(GioHangReducer) => gioHnag(stateGioHang)
    gioHang: state.stateGioHang.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      let action = { type: "XOA_GIO_HANG", maSP };
      dispatch(action);
    },
    tangGiamSoLuong: (maSP,tangGiam ) => {
      let action = {type: "TANG_GIAM_SO_LUONG", maSP , tangGiam}
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux); // biến stat(Reducer) => props(component)
