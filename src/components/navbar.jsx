import CartImage from '../assets/cart.png'
import React from 'react'

const Navbar = () => {
      return(
            <nav className="navbar">
                  <button>Shop</button>
                  <img src={CartImage} alt="Cart" />
            </nav>
      );
}

export default Navbar;