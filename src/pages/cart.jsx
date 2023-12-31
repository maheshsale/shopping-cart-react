import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "../components/cartItem";
import { products } from '../products';
import './cart.css'

export const Cart = () => {
      const {cartItems, totalCartItems, setTotalCartItems, cartTotal, setCartTotal} = useContext(ShopContext);

      const navigate = useNavigate();

      return(
            <div className="cart">
                  <div className="cart-items">
                        {cartItems.map( (itemId) => {       // Loop thorugh all the itemIds in cartItems
                              const item = products.filter( (product) => {    // from products list, filter out only the item present in cart
                                    return(product.id === itemId);
                              });         // this will return an array of object (only one object, as itemId is unique)

                              return(
                                    <CartItem key={itemId} product={item[0]}/>      // pass the product details from array (holding only single object)
                              );
                        })}
                  </div>

                  <div className="total-bill">
                        <p><b>Total Items: {totalCartItems}</b></p>
                        <p><b>Cart total price: {cartTotal}</b></p>
                        <button className="checkout-btn" onClick={() => navigate('/payment')}>Proceed to Checkout</button>
                  </div>
            </div>
      );
}