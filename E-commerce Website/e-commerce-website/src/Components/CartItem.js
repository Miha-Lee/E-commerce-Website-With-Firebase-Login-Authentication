import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

    return (
      <div className="cart-item">
        <div className="cart-product">
          <div className="d-md-none cart-p-head">
            <span>Product</span>
          </div>
          <div className="image-sm-column">
            <div className="image-column">
              <div className="column-img">
                <div
                  style={{
                    backgroundColor: "transparent",
                    color: "#121212",
                  }}
                >
                  <img src={img} alt="Shoes" className="res-img" />
                </div>
              </div>
              <div>
                <p className="pt-des">
                  <div className="inner-p">{title}</div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-price">
          <div className="d-md-none cart-m-head">
            <span>Price</span>
          </div>
          <div className="money-sm-column">
            <div>
              <span className="money">
                <span>${price}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="cart-quantity">
          <div className="d-md-none cart-q-head">Quantity</div>
          <div className="q-sm-column">
            <div>
              <div className="quantity-box">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    return decrement(id);
                  }}
                >
                  -
                </span>
                <span>{count}</span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    return increment(id);
                  }}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-total-2">
          <div className="d-md-none cart-t-head" style={{ color: "#797b7e" }}>
            Total
          </div>
          <div className="t-sm-column">
            <div>
              <span className="total-price">
                ${(Math.round(total * 100) / 100).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="cart-remove">
          <div className="d-md-none cart-r-head" style={{ color: "#797b7e" }}>
            Remove
          </div>
          <div className="r-sm-column">
            <div className="column-remove">
              <div
                className="remove-icon"
                onClick={() => {
                  removeItem(id);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 4V6H15V4H9Z"
                    fill="#121212"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
