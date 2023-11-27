import CartImage from '../assets/cart.png'
import React from 'react'
import './navbar.css'

const Navbar = () => {
      return(
            <nav className="navbar">
                  <div className="brand-name">
                        <h1>MahiCart.com</h1>
                  </div>
                  <div className="nav-right">
                        <button>Shop</button>
                        <img src={CartImage} alt="Cart" />
                  </div>
            </nav>
      );
}

export default Navbar;