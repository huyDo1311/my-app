import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="display-6 text-warning">{this.props.ketQua}</div>
        <div className="display-6 text-success">số bàn thắng: 
        <span className='text-warning'>{this.props.soBanThang}</span>
        </div>
        <div className="display-6 text-success">Tổng số bàn chơi: 
        <span className='text-warning'>{this.props.soBanChoi}</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.OanTuXiReducer.ketQua,
    soBanThang: state.OanTuXiReducer.soBanThang,
    soBanChoi: state.OanTuXiReducer.soBanChoi
  }
}

export default connect(mapStateToProps)(KetQua)