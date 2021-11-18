import React, { Component } from "react";
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import PayPalbutton from "./PayPalbutton";
import { ProductConsumer } from "../Context/Context";

class Cart extends Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {(value) => {
            const { cart, clearCart } = value;

            if (cart.length > 0) {
              return (
                <>
                  <div className="container">
                    <div className="cart-content">
                      <div>
                        <div>
                          <div className="container">
                            <h1 className="cart-title">your shopping cart</h1>
                            <div className="cart-wrapper">
                              <div className="cart-row">
                                <div className="cart-col-12">
                                  <CartHeader />
                                  <CartList value={value} />
                                </div>

                                <div className="order-receipt r-col-12 r-col-lg-4">
                                  <div className="order-wrapper">
                                    <h5 className="order-title">
                                      Order Summary
                                    </h5>
                                    <p className="total-p">
                                      <span
                                        style={{
                                          color: "#797b7e",
                                          fontWeight: "400",
                                        }}
                                      >
                                        Total
                                      </span>
                                      <span
                                        style={{
                                          color: "#121212",
                                          fontWeight: "400",
                                        }}
                                      >
                                        {cart.length} items(s)
                                      </span>
                                    </p>
                                    <p className="total-p-2">
                                      <span className="total-price-t">
                                        Total Price
                                      </span>
                                      <span className="money-p">
                                        <span>
                                          $
                                          {(
                                            Math.round(value.cartTotal * 100) /
                                            100
                                          ).toFixed(2)}
                                        </span>
                                      </span>
                                    </p>
                                    <PayPalbutton
                                      total={value.cartTotal}
                                      clearCart={clearCart}
                                    />
                                    <p className="btn-wrapper">
                                      <button
                                        className="btn"
                                        onClick={() => {
                                          clearCart();
                                        }}
                                      >
                                        Clear Cart
                                      </button>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ;
                </>
              );
            } else {
              return (
                <h1 style={{ textAlign: "center" }}>There is no Cart Items.</h1>
              );
            }
          }}
        </ProductConsumer>
      </>
    );
  }
}

export default Cart;
