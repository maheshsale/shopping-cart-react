import React from "react";

export const CartItem = ({product}) => {
      return(
                  <div className="cart-item">
                        <div className="item-image">
                              <img src={product.image} alt={product.name} />
                        </div>
                        <div className="item-details">
                              <p><b>{product.name}</b></p>
                              <p><b>{product.price}</b></p>
                        </div>
                  </div>
                  
      );
}