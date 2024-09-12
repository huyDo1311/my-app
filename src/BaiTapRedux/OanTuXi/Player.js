import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
  render() {
    return (
      <div className='playerGame'>
        <div className="theThink">
        <img className='mt-4' style={{transform: "rotate(120deg)",width:35,height:35}} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}  alt="" />
        </div>
        <div className="speech-bubble"></div>
       <img style={{width:150,height:150}} src="./img/OanTuXi/player.png" alt="./img/OanTuXi/player.png" /> 
        <div className="row">
        {this.props.mangDatCuoc.map((item,index) => {

          let border = {};

          if(item.datCuoc) {
            border = {border: "3px solid orange"}
          }

          return <div key={index} className="col-4">
            <button onClick={() => {
              this.props.datCuoc(item.ma)
            }} style={border} className='btnItem'><img style={{width:35,height:35}} src={item.hinhAnh} alt="" /></button>
          </div>
        })}
          
        </div>     
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.OanTuXiReducer.mangDatCuoc
  }
}

const mapDispatchToProps = (dispatch,action) => {
  return {
    datCuoc: (maCuoc) => {
       dispatch({
            type: 'CHON_KEO_BUA_BAO',
            maCuoc
       })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)