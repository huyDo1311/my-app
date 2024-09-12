import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoReduxMini extends Component {
  render() {
    console.log(this.props)
    return (
      <div>DemoReduxMini</div>
    )
  }
}

let mapStateToProps = (state) => {
    return{
        number: state.number,
    }
}

export default connect(mapStateToProps)(DemoReduxMini);