import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context/Context";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="detail-container">
              <div className="row">
                <div id="content " className="col-sm-12">
                  <div className="main-content">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="product-image">
                          <div className="image-wrap">
                            <div className="inner-image">
                              <img src={img} alt="Shoes" className="image-st" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <h1 className="product-title">{title}</h1>
                        <div className="price-box">
                          <div>
                            <span className="price">${price}</span>
                          </div>
                        </div>
                        <p className="info">{info}</p>
                        <div>
                          <div className="form-group">
                            <button
                              className={
                                inCart ? "inCart-button" : "button-cart"
                              }
                              disabled={inCart ? true : false}
                              onClick={() => {
                                value.addToCart(id);
                              }}
                              style={{ marginRight: "10px" }}
                            >
                              {inCart ? "In Cart" : "Add to Cart"}
                            </button>
                            <Link to="/">
                              <button className="home-button">
                                Back To Home Page
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
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

export default Details;
