import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
      const [cartItems, setCartItems] = useState([]);

      const addToCart = (itemId) => {
            setCartItems((prev) => {
                  return([...prev, itemId]);
            });
      }
      console.log(cartItems);

      return <ShopContext.Provider value={{cartItems, addToCart}}>{props.children}</ShopContext.Provider>;
}