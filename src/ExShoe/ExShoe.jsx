import React, { Component } from 'react'
import Cart from './Cart'
import ListShoe from './ListShoe'
import { dataShoe } from './dataShoe'

export default class ExShoe extends Component {
  state = {
    cart: [],
    listShoe: dataShoe
  }

  handleAddToCart = (shoe) => {
    let cloneCart = [...this.state.cart];
    // console.log('cloneCart', cloneCart);
    let index = cloneCart.findIndex((item)=> item.id === shoe.id);
    if(index !== -1){
      cloneCart[index].total += 1;
    }else {
      // cloneCart.push({...shoe, total: 1});
      cloneCart = [...cloneCart, {...shoe, total: 1}];
    }
    this.setState({
      cart: cloneCart,
    })
  }

  handleDeleteCart = (idShoe) => {
    let {cart} = this.state;
    let newCart = cart.filter((shoe) => shoe.id !== idShoe)
    this.setState({
      cart: newCart
    })
  }

  handleChangeTotal = (idShoe, option) => {
    // console.log('idShoe,option', idShoe,option);
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id === idShoe);

    if(index !== -1){
      if(option === 1){
        // let shoe = cloneCart[index];
        // shoe.total = shoe.total + option;
        cloneCart[index].total += option;
      } else {
        if(cloneCart[index].total > 1) {
          cloneCart[index].total += option;
        } else {
          alert("Số lượng tối thiểu là 1 ");
        }
      }
    }
    this.setState({
      cart: cloneCart,
    })
  }

  render() {
    let {cart,listShoe} = this.state;
    return (
      <div className='row'>
        <ListShoe handleClickAdd={this.handleAddToCart} shoeArr={listShoe} />
        <Cart handleChangeTotal={this.handleChangeTotal} handleDelete={this.handleDeleteCart} dataCart={cart}/>
      </div>
    )
  }
}
