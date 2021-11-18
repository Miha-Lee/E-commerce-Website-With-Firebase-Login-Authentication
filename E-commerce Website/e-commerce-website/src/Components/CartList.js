import React, { Component } from "react";
import CartItem from "./CartItem";

class CartList extends Component {
  render() {
    const { value } = this.props;
    const { cart } = this.props.value;

    return (
      <>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} value={value} />
        ))}
      </>
    );
  }
}

export default CartList;
