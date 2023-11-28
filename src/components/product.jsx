import React from "react";
import './product.css'

export const Product = (props) => {
      const {id, name, image, price} = props.data;

      return(
            <div className="product">
                  <img src={image} alt={name} />
                  <p><b>{name}</b></p>
                  <p>{price} ₹</p>
                  <button className="addToCartBtn">Add to Cart</button>
            </div>
      );
}