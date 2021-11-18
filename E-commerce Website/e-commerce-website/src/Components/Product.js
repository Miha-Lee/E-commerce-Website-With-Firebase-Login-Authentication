import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context/Context";

class Product extends Component {
  render() {
    const { id, title, img, price } = this.props.product;
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div
              className="col-6 col-md-4 col-xl-3 product-item"
              onClick={() => value.handleDetail(id)}
            >
              <div className="product-detail">
                <div className="product-img-wrapper">
                  <div className="product-img">
                    <Link to="/details" className="img-detail">
                      <img src={img} alt="Shoes" className="img_fluid" />
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <div>
                    <h6 className="product-name">{title}</h6>
                  </div>
                  <div>
                    <div className="price-container">
                      <span className="price-value">
                        <span>${price}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Product;
