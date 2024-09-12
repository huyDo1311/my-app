import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-center">
          BẠN CHỌN: 
          <span className="text-danger">{this.props.taiXiu ?  "Tài" : "Xỉu"}</span>
        </div>
        <div className="display-4 text-center">
          BÀN THẮNG: 
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div className="display-4 text-center">
          TỔNG SỐ BÀN CHƠI: 
          <span className="text-primary">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.GameXucXacReducer.soBanThang,
    taiXiu: state.GameXucXacReducer.taiXiu,
    tongSoBanChoi: state.GameXucXacReducer.tongSoBanChoi
  }
}

export default connect(mapStateToProps)(ThongTinTroChoi)