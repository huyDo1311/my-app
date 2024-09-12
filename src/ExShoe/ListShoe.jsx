import React, { Component } from 'react'
import ItemShoe from './ItemShoe'

export default class ListShoe extends Component {
  render() {
      let {shoeArr, handleClickAdd} = this.props;
    //   console.log(this.props);
    return (
        
      <div className='row col-6' >
        {shoeArr.map((item,index) => {
            return <ItemShoe handleClickAdd={handleClickAdd}  item={item} key={index}/>
        })}
        {/* <ItemShoe /> */}
      </div>
    )
  }
}
