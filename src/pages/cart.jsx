import React, { useContext, useState } from "react";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "../components/cartItem";
import {products} from '../products';

export const Cart = () => {
      const {cartItems} = useContext(ShopContext);

      return(
            <div className="cart">
                  {cartItems.map( (itemId) => {       // Loop thorugh all the itemIds in cartItems
                        const item = products.filter( (product) => {    // from products list, filter out only the item present in cart
                              return(product.id === itemId);
                        });         // this will return an array of object (only one object, as itemId is unique)
                        return(
                              <CartItem key={itemId} product={item[0]}/>      // pass the product details from array (holding only single object)
                        );
                  })}
            </div>
      );
}