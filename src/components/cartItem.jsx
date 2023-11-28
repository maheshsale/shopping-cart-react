import React from "react";

export const CartItem = ({product}) => {
      return(
            <div className="cart-item">
                  <img src={product.image} alt="" />
            </div>
      );
}