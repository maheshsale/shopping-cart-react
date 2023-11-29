import React, { createContext, useState } from "react";
import { products } from "../products";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
      const [cartItems, setCartItems] = useState([]);       // Array of itemIDs in cart
      const [totalCartItems, setTotalCartItems] = useState(0);    // count of total items in cart
      const [cartTotal, setCartTotal] = useState(0);  // total price of all items in cart

      const addToCart = (itemId) => {
            setCartItems((prev) => {
                  return([...prev, itemId]);
            });
            setTotalCartItems(totalCartItems + 1);

            // Logic for updating Cart Total Price
            const item = products.filter( (product) => {    // from products list, filter out only the item present in cart
                  return(product.id === itemId);
            });     
            setCartTotal(cartTotal + item[0].price);
      }

      const contextValues = {cartItems, addToCart, totalCartItems, setTotalCartItems, cartTotal, setCartTotal};
      return <ShopContext.Provider value={contextValues}>{props.children}</ShopContext.Provider>;
}