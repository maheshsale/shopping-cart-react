import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
      const [cartItems, setCartItems] = useState([]);
      const [totalCartItems, setTotalCartItems] = useState(0);

      const addToCart = (itemId) => {
            setCartItems((prev) => {
                  return([...prev, itemId]);
            });
            setTotalCartItems(totalCartItems + 1);
      }
      console.log(cartItems);

      return <ShopContext.Provider value={{cartItems, addToCart, totalCartItems, setTotalCartItems}}>{props.children}</ShopContext.Provider>;
}