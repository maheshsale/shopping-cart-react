import React from "react";
import './product.css'

export const Product = (props) => {
      const {id, name, image, price} = props.data;

      return(
            <div className="product">
                  <p><b>{name}</b></p>
                  <img src={image} alt={name} />
                  <p><b>Price: {price} ₹</b></p>
                  <button>Add to Cart</button>
            </div>
      );
}