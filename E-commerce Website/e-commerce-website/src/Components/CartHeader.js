import React from "react";

const CartHeader = () => {
  return (
    <div className="cart-header">
      <div className="cart-product">
        <span>Product</span>
      </div>
      <div className="cart-price">
        <span>Price</span>
      </div>
      <div className="cart-quantity">
        <span>Quantity</span>
      </div>
      <div className="cart-total">
        <span>Total</span>
      </div>
    </div>
  );
};

export default CartHeader;
