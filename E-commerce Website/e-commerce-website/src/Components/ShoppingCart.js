import React, { Component } from "react";
import { ProductConsumer } from "../Context/Context";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

class ShoppingCart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          return (
            <div className="right-nav">
              <ShoppingBasketIcon />
              <span className="basket_count">{cart.length}</span>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default ShoppingCart;
