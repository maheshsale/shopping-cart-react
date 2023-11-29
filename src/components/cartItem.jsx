import React from "react";
import './cartItem.css'

export const CartItem = ({product}) => {
      return(
                  <div className="cart-item">
                        <img src={product.image} alt={product.name} />
                        <div className="item-details">
                              <p><b>{product.name}</b></p>
                              <p><b>Price: {product.price} ₹</b></p>
                        </div>
                  </div>
                  
      );
}