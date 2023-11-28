import React from "react";
import { products } from "../products";
import { Product } from "../components/product";
import './shop.css';

export const Shop = () => {
      return(
            <div className="shop">
                  <div className="products">
                        {products.map((product) => {
                              return(
                                    <Product key={product.id} data={product} />
                              );
                        })}
                  </div>
            </div>
      );
}