import React, { Component } from "react";
import Product from "./Product";
import { storeProducts } from "../data";
import { ProductConsumer } from "../Context/Context";

class Home extends Component {
  state = {
    products: storeProducts,
  };

  render() {
    return (
      <div className="container">
        <h2 className="products-title">Our products</h2>
        <div className="products_list">
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default Home;
