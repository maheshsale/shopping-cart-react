import CartImage from '../assets/cart.png'
import React, {useContext} from 'react'
import './navbar.css'
import {useNavigate} from 'react-router-dom'
import { ShopContext } from "../context/shop-context";


const Navbar = () => {
      const navigate = useNavigate();
      const {totalCartItems} = useContext(ShopContext);

      return(
            <nav className="navbar">
                  <div className="brand-name">
                        <h1>MahiCart.com</h1>
                  </div>
                  <div className="nav-right">
                        <button onClick={() => navigate('/')}>Shop</button>
                        <div className="cart-image">
                              <img src={CartImage} alt="Cart" onClick={() => navigate('/cart')}/>
                              <p>{totalCartItems}</p>
                        </div>
                  </div>
            </nav>
      );
}

export default Navbar;