import React, { useContext } from "react";
import './product.css';
import { ShopContext } from "../context/shop-context";

export const Product = (props) => {
      const {id, name, image, price} = props.data;

      const {addToCart} = useContext(ShopContext);

      return(
            <div className="product">
                  <img src={image} alt={name} />
                  <p><b>{name}</b></p>
                  <p>{price} ₹</p>
                  <button className="addToCartBtn" onClick={() => addToCart(id)}>Add to Cart</button>
            </div>
      );
}